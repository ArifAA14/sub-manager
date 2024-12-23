'use client';
import { uploadURL } from '@/app/actions/SubscriptionService';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { upload } from '@vercel/blob/client';
import { FormEvent, useRef, useState } from 'react';
import { toast } from 'sonner';
import { SubscriptionI } from '../../../../lib/types';
import { FileUp } from 'lucide-react';

function UploadDialog({ isOpen, close, subscription }: { isOpen: boolean, close: () => void, subscription: SubscriptionI }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const handleFileChange = () => {
    if (inputFileRef.current?.files?.[0]) {
      setSelectedFileName(inputFileRef.current.files[0].name);
    }
  };
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
    toast.dismiss();
    await uploadURL(subscription.id, newBlob.url);
    toast.success('File uploaded successfully');
    close();
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
                <form
                onSubmit={(event) => handleUpload(event)}
                className='flex flex-col gap-4 w-full h-full'
              >
                <div className='w-full h-full flex flex-col items-center justify-center
                 gap-4 mt-6 full py-10 px-4 border border-dashed rounded-lg mb-4 text-gray-400'
                  onClick={() => document.getElementById("fileUpload")?.click()}
                >
                  <input name="file" ref={inputFileRef} type="file" required
                    hidden
                    id="fileUpload"
                    onChange={handleFileChange}
                    className='w-full  border border-dashed rounded-lg mb-4 text-gray-400'
                  />
                  {!selectedFileName ? (
                    <div className='p-10 flex flex-col gap-4 items-center justify-center w-full'>
                      <FileUp size={40} className='text-gray-600 animate-bounce' strokeWidth={1} />
                      <p className='text-sm font-normal text-gray-400 tracking-tight'>
                        Click to upload a file (only PDFs are allowed)
                      </p>
                    </div>
                  ) : (<p className='text-sm font-normal text-gray-400 tracking-tight'>
                    {selectedFileName}
                  </p>)}
                </div>
                <div className='w-full flex items-center justify-end gap-6'>
                  <h2 className='text-gray-400 font-medium flex items-center gap-2 
                font-sans text-sm tracking-tighter' onClick={close}>
                    Cancel
                  </h2>
                  <button className='text-gray-400 font-medium flex items-center gap-2 bg-neutral-50 rounded-lg 
                font-sans text-sm tracking-tighter px-4 py-2 border border-dashed h-[40px]' type="submit">Upload</button>
                </div>
              </form>
            </div>

          </DialogPanel>
        </div>
      </div >
    </Dialog >
  )
}

export default UploadDialog