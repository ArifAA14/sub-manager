import { TrendingDownIcon } from '../ui/Icons/TrendingDownIcon'
import { TrendingUpIcon } from '../ui/Icons/TrendingUpIcon'

function Card({ amount, text, trend }: {
    amount: string | number,
    text: string,
    trend: number
}
) {
    return (
        <div className={`w-full h-full  rounded-xl border lg:border px-0  bg-white  flex flex-col gap-0 relative justify-between`}
            key={text}
        >
            <h1 className={`text-4xl font-medium  font-sans h-full w-full tracking-tight text-black border-b px-7 py-8 `}>
                {amount}
            </h1>
            <div className="flex items-center w-full justify-between px-7 py-3 bg-neutral-50 rounded-b-xl  h-full">
                <h2 className="text-sm font-normal  font-sans tracking-tight text-neutral-500">
                    {text}
                </h2>
                {
                    trend > 0 ?

                        <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-red-600">
                            <TrendingUpIcon />{trend}
                        </div>
                        : <div className="flex gap-2 items-center font-serif font-medium text-sm tracking-tighter text-green-600">
                            <TrendingDownIcon />{trend}
                        </div>
                }
            </div>
        </div>
    )
}

export default Card