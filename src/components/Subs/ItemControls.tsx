'use client'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArchiveIcon, Ellipsis, PencilIcon, TrashIcon } from 'lucide-react'

export default function ItemControls() {

    return (
        <Menu>
            <MenuButton className="inline-flex items-center text-sm/6 
        font-semibold text-white focus:outline-none border p-2 rounded-lg">

                <Ellipsis className="text-gray-400 hover:text-black transition-all ease-in-out duration-300" size={16} />
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="w-48 max-h-fit mt-2 origin-top-right rounded-xl border  backdrop-blur-sm  shadow p-1 text-sm/6 text-gray-400 relative overflow-clip
          transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >


                <MenuItem >
                    <button className="group relative flex font-medium font-sans hover:bg-neutral-200 z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-red/10 text-black ">
                        <PencilIcon className="size-4 fill-white/30" size={12} />
                        Edit
                        <kbd className="ml-auto hidden font-sans text-xs text-neutral-400 group-data-[focus]:inline">⌘E</kbd>
                    </button>
                </MenuItem>


                <MenuItem>
                    <button className="group relative flex font-medium font-sans z-[100] hover:bg-neutral-200 transition-all text-red-600 ease-in-out duration-300
             w-full items-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-red/10 "
                    >
                        <TrashIcon className="size-4 text-red-600" size={12} />
                        Delete
                        <kbd className="ml-auto hidden font-sans text-xs text-red-400 group-data-[focus]:inline">⌘D</kbd>
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    )
}