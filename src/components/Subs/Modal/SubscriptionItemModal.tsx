'use client'
import { update } from '@/app/actions/SubscriptionService';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { useState } from 'react';
import { SubscriptionI } from '../../../../lib/types';
import { addSubscriptionSchema } from '../../../../lib/zod/schema';
import SubscriptionModelFields from './SubscriptionModelFields';
import { toast } from 'sonner';


interface SubscriptionItemEditModalProps {
    isOpen: boolean;
    close: () => void;
    subscription: SubscriptionI;
    categories: string[];
}

function SubscriptionItemEditModal({ isOpen, close, subscription, categories }: SubscriptionItemEditModalProps) {
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
    const [loading, setLoading] = useState(false);
    async function handleSave() {
        setLoading(true);
        try {
            await addSubscriptionSchema.parseAsync(subscriptionObject)
            const result = await update(subscriptionObject)
            if (result.success) {
                close()
                setLoading(false);
                toast.success('Subscription updated successfully!')
            }
        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }
    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-0 w-screen overflow-y-clip">
                <div className="flex min-h-full items-center justify-center p-4">
                    <DialogBackdrop className=' backdrop-blur w-full h-full absolute inset-0 bg-neutral-600/50' />
                    <DialogPanel
                        transition
                        className="max-h-[85vh] lg:max-h-[96vh] h-full w-[90vw] max-w-[480px] lg:max-w-[650px] p-6 pt-2 border rounded-md bg-white backdrop-blur 
                        data-[state=open]:animate-contentShow  shadow-sm   lg:overflow-y-visible overflow-y-auto"
                    >
                        <SubscriptionModelFields
                            subscriptionObject={subscriptionObject}
                            setSubscriptionObject={setSubscriptionObject}
                            close={close}
                            handleSave={handleSave}
                            categories={categories}
                            loading={loading}
                        />

                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

export default SubscriptionItemEditModal