import { Input } from '@headlessui/react'
import { SearchIcon } from 'lucide-react'
import React from 'react'

function SearchFilter({ searchInput, setSearchInput }: { searchInput: string, setSearchInput: (searchInput: string) => void }) {
  return (
    <div className='w-full relative lg:max-w-[200px] flex items-center gap-2'>
      <SearchIcon className="absolute left-2 text-gray-400" size={14} />
      <Input type="text" placeholder="Search by title.." className="w-full lg:max-w-[200px] placeholder:text-sm
           !py-2 px-7 border border-dashed bg-white rounded-lg outline-none"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  )
}

export default SearchFilter