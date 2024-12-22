'use client'
import { useChat } from 'ai/react';
import { ArrowLeft, BotIcon } from 'lucide-react';
import { SubscriptionI } from '../../../lib/types';
import Link from 'next/link';

function ChatClient({ subscriptions }: { subscriptions: SubscriptionI[] }) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: {
      subs: JSON.stringify({
        subs: subscriptions.map(s => ({
          title: s.title,
          amount: s.amount,
          type: s.subscription_type,
          startDate: s.start_date,
          category: s.category,
          currency: s.currency,
        })),
      }),
    }
  });
  return (
    <div className="flex flex-col w-full lg:max-w-[60%] lg:px-0 p-4 overflow-x-clip  gap-10 py-0 mx-auto 
    overflow-hidden justify-between relative h-full min-h-screen">
      <div className='absolute top-0 mt-6 left-6 lg:left-0 flex items-center gap-4'>
        <Link href={'/'}>
          <h2 className="lg:text-base text-base font-medium font-sans flex items-center gap-2 tracking-tight text-gray-400">
            <ArrowLeft size={20} className="text-gray-400" /> Back
          </h2>
        </Link>
      </div>
      {!messages.length ? <div className="px-4 py-3 mt-20 flex items-center flex-col gap-4">
        <BotIcon className=" text-orange-600  animate-bounce duration-700"
          size={90}
          strokeWidth={1}
        />
        <h1 className="text-xl font-normal text-center font-sans text-gray-400">I am your personalized AI assistant.
          Ask me anything about your subscriptions.</h1>
      </div> : null}

      <div className=' w-full pr-10 mt-16 h-full flex flex-col gap-4 max-h-[700px] overflow-y-auto'>
        {messages.map(m => (
          <div key={m.id} className={`flex  gap-6 w-full h-full ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} `}>
            {m.role === 'user' ? '' :
              <BotIcon className=" text-orange-600 mt-2 ml-1 "
                size={32}
                strokeWidth={1}
              />}

            <div className={`  whitespace-pre-wrap px-4 w-fit max-w-fit flex  py-4 rounded-lg border 
            border-dashed text-base font-normal gap-0 flex-col
          ${m.role === 'user' ? 'bg-neutral-50 border-0 text-gray-500' : 'bg-white'}
        `}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className=" w-full placeholder:text-sm text-base outline-none px-4 py-3 mx-auto  mb-4 border border-dashed rounded "
          value={input}
          placeholder="Ask any question regarding your subscriptions...."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ChatClient