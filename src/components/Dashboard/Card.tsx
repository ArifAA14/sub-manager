import { SubscriptionI } from '../../../lib/types';
import getCurrencySymbol from '../../../utils/currencySymbol';
import { getMonthlyTrends } from '../../../utils/trends';
import { TrendingUpIcon } from '../ui/Icons/TrendingUpIcon';


function Card({ text, subscriptions }: {
    text: string,
    subscriptions: SubscriptionI[]
}
) {

    const monthlyData = subscriptions.filter((sub) => sub.subscription_type === "Monthly")
    const monthlyTotal = monthlyData.reduce((acc, curr) => acc + curr.amount, 0)
    const yearlyData = subscriptions.filter((sub) => sub.subscription_type === "Yearly")
    const yearlyTotal = yearlyData.reduce((acc, curr) => acc + curr.amount, 0)


    const monthlyTrends = getMonthlyTrends(subscriptions);
    console.log(monthlyTrends)

    function getAmount(text: string) {
        if (text === 'Yearly') {
            return yearlyTotal
        } else if (text === 'Monthly') {
            return monthlyTotal
        } else {
            return subscriptions.length
        }
    }


    function getTrends(text: string) {
        if (text === 'Monthly') {
            return (
                monthlyTrends > 0 ? (
                    <div className='flex items-center text-sm font-medium gap-2 text-red-600'>
                        <TrendingUpIcon />   {monthlyTrends}
                    </div>
                ) : <div className='flex items-center gap-2 text-green-600 text-sm font-medium'>
                    {monthlyTrends}
                </div>

            )
        }

    }


    return (
        <div className={`w-full h-full  rounded-lg border border-dashed  px-0  bg-white  flex flex-col gap-0 relative justify-between`}
            key={text}
        >
            <h1 className={`text-4xl font-medium font-sans h-full w-full tracking-tight text-black  px-6 py-8 `}>
                {text === 'Yearly' || text === 'Monthly' ? getCurrencySymbol(subscriptions[0].currency) : null}
                {
                    getAmount(text)
                }
            </h1>
            <div className="flex items-center w-full justify-between px-7 py-3 bg-neutral-50 h-full rounded-b-lg">
                <h2 className="text-sm font-normal  font-sans tracking-tight text-neutral-500">
                    {text}
                </h2>

                {getTrends(text)}

            </div>
        </div>
    )
}

export default Card