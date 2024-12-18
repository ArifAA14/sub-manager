import { TrendingDownIcon } from '../ui/Icons/TrendingDownIcon'
import { TrendingUpIcon } from '../ui/Icons/TrendingUpIcon'

function Card({ amount, text, trend }: {
    amount: string | number,
    text: string,
    trend: number
}
) {
    return (
        <div className={`w-full h-full bg-black shadow-sm px-7   py-7 rounded-2xl flex flex-col gap-4 relative justify-between`}
            key={text}
        >
            <h1 className={`text-4xl font-medium font-serif tracking-tight text-white border-b border-neutral-700 pb-6`}>
                {amount}
            </h1>
            <div className="flex items-center w-full justify-between">
                <h2 className="text-sm font-normal  font-sans tracking-tight text-neutral-300">
                    {text}
                </h2>
                {
                    trend > 0 ?

                        <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-red-400">
                            <TrendingUpIcon />{trend}
                        </div>
                        : <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-green-400">
                            <TrendingDownIcon />{trend}
                        </div>
                }
            </div>
        </div>
    )
}

export default Card