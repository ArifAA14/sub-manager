'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import SubscriptionModelFields from './SubscriptionModelFields';

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
        currency: '',
    })

    async function handleSave() {
        console.log(subscriptionObject)
    }

    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-0 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogBackdrop className=' backdrop-blur w-full h-full fixed inset-0 bg-neutral-200/50' />
                    <DialogPanel
                        transition
                        className="max-h-[85vh] w-[90vw] max-w-[450px] lg:max-w-[650px] p-6 border rounded-md bg-white/90 backdrop-blur-xl data-[state=open]:animate-contentShow 
                        overflow-hidden shadow-sm"
                    >
                        <DialogTitle as="h2" className="text-lg font-medium flex text-black font-sans w-full h-full items-center justify-between">
                            New Subscription
                        </DialogTitle>

                        <SubscriptionModelFields
                            subscriptionObject={subscriptionObject}
                            setSubscriptionObject={setSubscriptionObject}
                            close={close}
                            handleSave={handleSave}
                        />

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default SubscriptionItemModal