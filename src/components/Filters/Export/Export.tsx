import { DownloadIcon } from 'lucide-react'
import React, { useState } from 'react'
import { SubscriptionI } from '../../../../lib/types'
import ExportDialog from './ExportDialog'

function Export({ subscriptions }: { subscriptions: SubscriptionI[] }) {
  const [isOpen, setIsOpen] = useState(false)
  if (!subscriptions) return null

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }


  return (
    <>
      <button className='text-gray-400 font-medium flex items-center gap-2 bg-neutral-50 rounded-lg 
    font-sans text-sm tracking-tighter px-4 py-2.5 border border-dashed'
        onClick={open}
      >
        <DownloadIcon className='text-gray-600' size={16} strokeWidth={1.5} />
        Export
      </button>

      <ExportDialog isOpen={isOpen} close={close}
        subscriptions={subscriptions}
      />
    </>
  )
}

export default Export