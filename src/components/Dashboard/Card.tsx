import React from 'react'
import { TrendingUpIcon } from '../ui/Icons/TrendingUpIcon'
import { LargeNumberLike } from 'node:crypto'
import { TrendingDownIcon } from '../ui/Icons/TrendingDownIcon'

function Card({ color, amount, text, trend }: {
    color: string,
    amount: string | number,
    text: string,
    trend: number
}
) {
    return (
        <div className={`w-full h-full bg-white shadow-sm px-7 border border-${color}-100 py-7 rounded-2xl flex flex-col gap-4 relative justify-between`}>
            <h1 className={`text-4xl font-medium font-serif tracking-tight text-black border-b border-${color}-100 pb-6`}>
                £{amount}
            </h1>
            <div className="flex items-center w-full justify-between">
                <h2 className="text-sm font-normal  font-sans tracking-tight text-gray-400">
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