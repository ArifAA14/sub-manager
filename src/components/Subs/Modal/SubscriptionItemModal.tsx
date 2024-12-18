'use client'
import { Input } from '@/components/ui/Inputs/Input';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useRef, useState } from 'react';
import TypePicker from './TypePicker';
import CategoryPicker from './CategoryPicker';
import { SubscriptionI } from '../../../../lib/types';

function SubscriptionItemModal({ isOpen, close }: { isOpen: boolean, close: () => void }) {

    const [subscriptionObject, setSubscriptionObject] = useState<SubscriptionI>({
        id: '',
        title: '',
        description: '',
        subscription_type: '',
        category: '',
        start_date: '',
        end_date: '',
        amount: 0,
        user_id: '',
    })


    const startDatePicker = useRef<HTMLInputElement>(null);
    const endDatePicker = useRef<HTMLInputElement>(null);

    const handleShowStartPicker = () => {
        if (startDatePicker.current) {
            startDatePicker.current?.showPicker();
        }
    };

    const handleShowEndPicker = () => {
        if (endDatePicker.current) {
            endDatePicker.current?.showPicker();
        }
    };

    console.log(subscriptionObject)
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-0 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogBackdrop className=' backdrop-blur w-full h-full fixed inset-0' />
                    <DialogPanel
                        transition
                        className="max-h-[85vh] w-[90vw] max-w-[450px] p-6 border rounded-md bg-white/90 backdrop-blur-xl data-[state=open]:animate-contentShow 
                        overflow-hidden shadow-sm"
                    >
                        <DialogTitle as="h2" className="text-lg font-medium flex text-black font-sans w-full h-full items-center justify-between">
                            New Subscription
                        </DialogTitle>

                        <div className='flex flex-col w-full h-full justify-between px-0 mt-4 py-2'>
                            <div className='flex flex-col gap-4' >
                                <Input placeholder='Title' type='text' required
                                    value={subscriptionObject.title}
                                    onChange={(e) => setSubscriptionObject({ ...subscriptionObject, title: e.target.value })}
                                />
                                <Input placeholder='Description..' type='text' required
                                    value={subscriptionObject.description}
                                    onChange={(e) => setSubscriptionObject({ ...subscriptionObject, description: e.target.value })}
                                />
                                <Input placeholder='Amount' type='number' min={0} required
                                    value={subscriptionObject.amount}
                                    onChange={(e) => setSubscriptionObject({ ...subscriptionObject, amount: e.target.value as unknown as number })}
                                />
                                <div className='flex w-full items-center justify-between relative'
                                    onClick={handleShowStartPicker}
                                >
                                    <Input placeholder='Start Date' type='date' name='Start Date' ref={startDatePicker}
                                        className='w-full placeholder:text-gray-400'
                                        value={subscriptionObject.start_date}
                                        onChange={(e) => setSubscriptionObject({ ...subscriptionObject, start_date: e.target.value })}
                                    />
                                    <p className='text-sm  absolute right-0 px-5 text-gray-400 font-sans'>Start Date</p>
                                </div>

                                <div className='flex w-full items-center justify-between relative'
                                    onClick={handleShowEndPicker}

                                >
                                    <Input placeholder='Start Date' type='date' name='Start Date'
                                        ref={endDatePicker} className='w-full placeholder:text-gray-400'
                                        value={subscriptionObject.end_date}
                                        onChange={(e) => setSubscriptionObject({ ...subscriptionObject, end_date: e.target.value })}
                                    />
                                    <p className='text-sm  absolute right-0 px-5 text-gray-400 font-sans'>End Date</p>
                                </div>

                                <TypePicker value={subscriptionObject.subscription_type}
                                    setSubscriptionObject={setSubscriptionObject}
                                />
                                <CategoryPicker value={subscriptionObject.category}
                                    setSubscriptionObject={setSubscriptionObject}
                                />



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