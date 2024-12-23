'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { type PutBlobResult } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { FormEvent, useRef, useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { toast } from 'sonner';
import { uploadURL } from '@/app/actions/SubscriptionService';

function UploadDialog({ isOpen, close, subscription }: { isOpen: boolean, close: () => void, subscription: SubscriptionI }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);

  async function handleUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.loading('Uploading...');

    if (!inputFileRef.current?.files) {
      toast.error('No File Selected');
      return;
    }
    if (!inputFileRef.current.files[0].type.startsWith('application/pdf')) {
      toast.error('Only PDF files are allowed');
      return;
    }
    if (inputFileRef.current.files[0].size > 1000000) {
      toast.error('File size cannot exceed 1MB');
      return;
    }

    const file = inputFileRef.current.files[0];

    const newBlob = await upload(
      `${subscription.user_id}/${subscription.id}`,
      file, {
      access: 'public',
      handleUploadUrl: '/api/upload',
    });
    if (!newBlob) {
      toast.error('Failed to upload file');
      return;
    }
    toast.success('File uploaded successfully');
    await uploadURL(subscription.id, newBlob.url);
    setBlob(newBlob);
  }



  return (
    <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
      <div className="fixed inset-0 z-0 w-screen overflow-y-clip">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogBackdrop className=' backdrop-blur w-full h-full absolute inset-0 bg-neutral-600/50' />
          <DialogPanel
            transition
            className="max-h-[85vh] lg:max-h-[96vh] h-full w-[90vw] max-w-[480px] 
            lg:max-w-[650px] p-6 border rounded-md bg-white backdrop-blur 
            data-[state=open]:animate-contentShow  shadow-sm   lg:overflow-y-visible overflow-y-auto"
          >

            <DialogTitle as='div' className='flex flex-col gap-1'>
              <h2 className='text-lg font-medium font-sans tracking-tight text-gray-600'>
                Upload Invoice
              </h2>
              <p className='text-sm font-normal font-sans tracking-tight text-gray-400'>
                Maximum file size allowed is 8MB
              </p>
            </DialogTitle>

            <div className='w-full h-full flex flex-col gap-4 mt-6 mb-0 '

            >

              <>
                <h1>Upload Your Avatar</h1>

                <form
                  onSubmit={(event) => handleUpload(event)}
                >
                  <input name="file" ref={inputFileRef} type="file" required />
                  <button type="submit">Upload</button>
                </form>
                {blob && (
                  <div>
                    Blob url: <a href={blob.url}>{blob.url}</a>
                  </div>
                )}
              </>

            </div>

          </DialogPanel>
        </div>
      </div >
    </Dialog >
  )
}

export default UploadDialog