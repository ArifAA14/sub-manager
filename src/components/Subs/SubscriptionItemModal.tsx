'use client'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useRef } from 'react'

function SubscriptionItemModal({ isOpen, close }: { isOpen: boolean, close: any }) {
    const startDatePicker = useRef<any>(null);
    const endDatePicker = useRef<any>(null);

    const handleShowStartPicker = () => {
        if (startDatePicker.current) {
            startDatePicker.current?.showPicker(); // Trigger the date picker
        }
    };

    const handleShowEndPicker = () => {
        if (endDatePicker.current) {
            endDatePicker.current?.showPicker(); // Trigger the date picker
        }
    };

    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="max-h-[85vh] w-[90vw] max-w-[450px] border rounded-md bg-white data-[state=open]:animate-contentShow overflow-hidden shadow-sm"
                    >
                        <DialogTitle as="div" className="text-base/7 font-medium flex text-black w-full h-full items-center justify-between">
                        </DialogTitle>

                        <div className='flex flex-col w-full h-full justify-between px-0 py-2'>
                            <div className='flex flex-col gap-0.5'>
                                <input className='outline-none border-b border-dashed placeholder:text-gray-400  w-full px-4 py-2 text-base placeholder:text-sm'
                                    placeholder={'Title'}
                                    type='text'
                                    required
                                    name='task'
                                    autoFocus
                                />
                                <input className=' outline-none border-b border-dashed placeholder:text-gray-400 placeholder:text-sm w-full px-5 py-2 text-sm'
                                    placeholder={'Description'}
                                    type='text'
                                    name='description'
                                />
                                <input className=' outline-none border-b border-dashed placeholder:text-gray-400 placeholder:text-sm w-full px-5 py-2 text-sm'
                                    placeholder={'Amount'}
                                    type='number'
                                    name='Amount'
                                />
                                <div className='flex w-full items-center justify-between border-b border-dashed'

                                    onClick={handleShowStartPicker}
                                >
                                    <input className=' outline-none  placeholder:text-gray-400 placeholder:text-sm w-full px-5 py-2 text-sm'
                                        placeholder={'Start Date'}
                                        type='date'
                                        name='Start Date'
                                        ref={startDatePicker}
                                    />
                                    <p className='text-sm w-full flex items-end justify-end px-5 text-gray-400 font-sans'>Start Date</p>
                                </div>

                                <div className='flex w-full items-center justify-between border-b border-dashed'

                                    onClick={handleShowEndPicker}
                                >
                                    <input className=' outline-none  placeholder:text-gray-400 placeholder:text-sm w-full px-5 py-2 text-sm'
                                        placeholder={'Start Date'}
                                        type='date'
                                        name='Start Date'
                                        ref={endDatePicker}
                                    />
                                    <p className='text-sm w-full flex items-end justify-end px-5 text-gray-400 font-sans'>End Date</p>
                                </div>

                                <div className='flex w-full items-center justify-between border-b border-dashed'

                                    onClick={handleShowEndPicker}
                                >
                                    <select className='px-5 py-2 text-sm outline-none'>
                                        <option value={'monthy'}>Monthly</option>
                                        <option value={'monthy'}>Yearly</option>
                                    </select>
                                    <p className='text-sm w-full flex items-end justify-end px-5 text-gray-400 font-sans'>Type</p>
                                </div>
                            </div>


                            <div className='flex items-center justify-between w-full mt-6 px-4 py-2'>
                                <div className='flex items-center gap-2'>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <button className='border text-gray-600 font-medium tracking-tight text-sm px-2.5 py-1 rounded-lg shadow-sm'
                                        onClick={close}
                                    >
                                        Cancel
                                    </button>
                                    <button className='bg-black text-white font-medium h-[30px]
              tracking-tighter text-sm px-2.5 py-1 rounded-lg shadow-sm w-[80px] text-center'
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default SubscriptionItemModal