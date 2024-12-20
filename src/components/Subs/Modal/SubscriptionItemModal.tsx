'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { addSubscriptionSchema } from '../../../../lib/zod/schema';
import SubscriptionModelFields from './SubscriptionModelFields';


function SubscriptionItemModal({ isOpen, close, subscription }: { isOpen: boolean, close: () => void, subscription: SubscriptionI }) {

    const [subscriptionObject, setSubscriptionObject] = useState<SubscriptionI>({
        id: subscription.id,
        title: subscription.title,
        subscription_type: subscription.subscription_type,
        category: subscription.category,
        start_date: subscription.start_date,
        end_date: subscription.end_date,
        amount: subscription.amount,
        user_id: subscription.user_id,
        currency: subscription.currency
    })

    async function handleSave() {
        try {
            await addSubscriptionSchema.parseAsync(subscriptionObject)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-0 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogBackdrop className=' backdrop-blur w-full h-full absolute inset-0 bg-neutral-600/50' />
                    <DialogPanel
                        transition
                        className="max-h-[85vh] w-[90vw] max-w-[450px] lg:max-w-[650px] p-6 border rounded-md bg-white backdrop-blur 
                        data-[state=open]:animate-contentShow  shadow-sm"
                    >
                        <DialogTitle as="h2" className="text-lg font-medium flex text-gray-400 font-sans w-full h-full items-center justify-between">
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