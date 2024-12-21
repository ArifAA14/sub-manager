import { SubscriptionI } from '../../../lib/types';
import getCurrencySymbol from '../../../utils/currencySymbol';


function Card({ amount, text, subscriptions }: {
    amount: string | number,
    text: string,
    subscriptions: SubscriptionI[]
}
) {


    return (
        <div className={`w-full h-full  rounded-lg border border-dashed  px-0  bg-white  flex flex-col gap-0 relative justify-between`}
            key={text}
        >
            <h1 className={`text-4xl font-medium font-sans h-full w-full tracking-tight text-black  px-6 py-8 `}>
                {getCurrencySymbol(subscriptions[0].currency)}{amount}
            </h1>
            <div className="flex items-center w-full justify-between px-7 py-3 bg-neutral-50 h-full rounded-b-lg">
                <h2 className="text-sm font-normal  font-sans tracking-tight text-neutral-500">
                    {text}
                </h2>

            </div>
        </div>
    )
}

export default Card