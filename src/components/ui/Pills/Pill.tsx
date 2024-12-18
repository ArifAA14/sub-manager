import React from 'react'

function Pill({ category }: { category: string }) {
    return (
        <div className="w-fit whitespace-nowrap h-full lg:px-4 py-1 px-2.5 flex items-center justify-center text-center text-sm border font-sans 
    font-medium tracking-tight rounded-2xl cursor-pointer text-gray-400 hover:text-black transition-all ease-in-out duration-300"
            key={category}
        >
            {category}
        </div>
    )
}

export default Pill