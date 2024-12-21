import { DownloadIcon } from 'lucide-react'
import React from 'react'
import { SubscriptionI } from '../../../lib/types'
import exportFile from '../../../utils/handleExport'

function Export({ subscriptions }: { subscriptions: SubscriptionI[] }) {
  if (!subscriptions) return null
  return (
    <button className='text-gray-400 font-medium flex items-center gap-2 bg-neutral-50 rounded-lg 
    font-sans text-sm tracking-tighter px-4 py-2.5 border border-dashed'
      onClick={() => exportFile(subscriptions)}
    >
      <DownloadIcon className='text-gray-600' size={16} strokeWidth={1.5} />
      Export
    </button>
  )
}

export default Export