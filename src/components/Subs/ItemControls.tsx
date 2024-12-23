'use client'
import { remove } from '@/app/actions/SubscriptionService';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { DownloadIcon, Ellipsis, File, PencilIcon, TrashIcon, UploadCloud } from 'lucide-react'
import { toast } from 'sonner';
import { SubscriptionI } from '../../../lib/types';
import { exportFile } from '../../../utils/handleExport';
import { useState } from 'react';
import UploadDialog from './Upload/UploadDialog';

export default function ItemControls({ id, open, subscription }: { id: string, open: () => void, subscription: SubscriptionI }) {
    const [uploadModal, setUploadModal] = useState(false);

    async function handleDelete() {
        if (!id) return null;
        const res = await remove(id);
        if (res.success) {
            console.log('Deleted')
            toast.success('Subscription deleted successfully!')
        }
    }

    return (
        <Menu
            key={id + 'controls'}
        >
            <MenuButton className="inline-flex items-center text-sm/6 
        font-semibold text-white focus:outline-none "
                id={id + 'button'}
                aria-label='More Options'

            >

                <Ellipsis className="text-gray-400 hover:text-black transition-all ease-in-out duration-300" size={19} />
            </MenuButton>

            <MenuItems
                transition
                anchor="bottom end"
                className="w-48 max-h-fit mt-2 origin-top-right  border  rounded-xl
                backdrop-blur-sm  shadow text-sm/6 text-gray-400 relative overflow-clip transition
                 duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >


                <MenuItem >
                    <button className="group relative flex font-normal font-sans hover:bg-black z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3  py-1.5 px-3 data-[focus]:bg-red/10 text-black hover:text-white "
                        onClick={open}
                    >
                        <PencilIcon className="size-4 text-gray-600 group-hover:text-white" size={12} />
                        Edit
                        <kbd className="ml-auto hidden font-sans text-xs text-neutral-400 group-data-[focus]:inline">⌘E</kbd>
                    </button>
                </MenuItem>





                <MenuItem >
                    <button className="group relative flex font-normal font-sans hover:bg-black z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3  py-1.5 px-3 data-[focus]:bg-red/10 text-black hover:text-white "
                        onClick={open}
                    >
                        <File className="size-4 text-orange-600" size={12} />
                        View Uploads
                        <kbd className="ml-auto hidden font-sans text-xs text-neutral-400 group-data-[focus]:inline">⌘E</kbd>
                    </button>
                </MenuItem>


                <MenuItem >
                    <button className="group relative flex font-normal font-sans hover:bg-black z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3  py-1.5 px-3 data-[focus]:bg-red/10 text-black hover:text-white "
                        onClick={() => setUploadModal(true)}
                    >
                        <UploadCloud className="size-4 text-blue-600 group-hover:text-blue-400" size={12} />
                        Add Invoice
                        <kbd className="ml-auto hidden font-sans text-xs text-neutral-400 group-data-[focus]:inline">⌘E</kbd>
                    </button>
                </MenuItem>







                <MenuItem >
                    <button className="group relative flex font-normal font-sans hover:bg-black z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3  py-1.5 px-3 data-[focus]:bg-red/10 text-black hover:text-white "
                        onClick={() => exportFile(subscription)}
                    >
                        <DownloadIcon className="size-4 text-green-600" size={12} />
                        Download (PDF)
                        <kbd className="ml-auto hidden font-sans text-xs text-neutral-400 group-data-[focus]:inline">⌘E</kbd>
                    </button>
                </MenuItem>





                <MenuItem>
                    <button className="group relative flex font-normal font-sans hover:bg-black z-[100] transition-all ease-in-out duration-300
             w-full items-center gap-3  py-1.5 px-3 data-[focus]:bg-red/10 text-red-600 hover:text-red-500"
                        onClick={handleDelete}
                    >

                        <TrashIcon className="size-4 text-red-600" size={12} />
                        Delete
                        <kbd className="ml-auto hidden font-sans text-xs text-red-400 group-data-[focus]:inline">⌘D</kbd>
                    </button>
                </MenuItem>
            </MenuItems>

            <UploadDialog isOpen={uploadModal} close={() => setUploadModal(false)}
                key={id + 'upload-modal'}
                subscription={subscription}
            />
        </Menu>
    )
}