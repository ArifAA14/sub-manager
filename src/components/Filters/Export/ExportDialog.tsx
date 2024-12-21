'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from 'lucide-react';
import { useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import exportFile from '../../../../utils/handleExport';

function ExportDialog({ isOpen, close, subscriptions }: { isOpen: boolean, close: () => void, subscriptions: SubscriptionI[] }) {

  const [selected, setSelected] = useState<string>('Excel (XLSX)');

  const fileTypes = [
    'Excel (XLSX)',
    'CSV ',
    'PDF',
  ]
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

            <DialogTitle as='h2' className='text-lg font-medium font-sans tracking-tight text-gray-400'>
              Export Data
            </DialogTitle>

            <div className='w-full h-full flex flex-col gap-4'>


              <RadioGroup value={selected} onChange={(newValue: string) => { setSelected(newValue) }}
                aria-label="Export File Type" className="w-full grid grid-cols-1 gap-4 mt-6"
                key={'export-type'}
              >
                {fileTypes.map((type) => (
                  <Radio
                    key={type}
                    value={type}
                    className="group relative flex cursor-pointer rounded-lg bg-neutral-50 py-3 px-4 transition text-gray-400
                    focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white
                   data-[checked]:text-black data-[checked]:border data-[checked]:border-dashed
                    tranistion-all ease-in-out duration-300"
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="text-sm/6">
                        <p className="font-medium tracking-tight ">{type}</p>
                      </div>
                      <CheckIcon className=" opacity-0 transition ease-linear group-data-[checked]:opacity-100" size={16} />
                    </div>
                  </Radio>
                ))}
              </RadioGroup>



              <div className='flex w-full items-center justify-end gap-4 mt-4'>
                <button className='text-gray-400 font-medium flex items-center gap-2 
                font-sans text-sm tracking-tighter'
                  onClick={close}
                >
                  Cancel
                </button>
                <button className='text-gray-400 font-medium flex items-center gap-2 bg-neutral-50 rounded-lg 
                font-sans text-sm tracking-tighter px-4 py-2 border border-dashed hover:text-black transition-all ease-in-out duration-300'
                  onClick={() => exportFile(subscriptions, selected)}
                >
                  Export
                </button>
              </div>

            </div>

          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default ExportDialog