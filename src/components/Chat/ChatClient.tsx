'use client'
import { useChat } from 'ai/react';
import { BotIcon } from 'lucide-react';
import { SubscriptionI } from '../../../lib/types';

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
    <div className="flex flex-col w-full lg:max-w-[60%] lg:px-0 p-8  gap-10 py-8 mx-auto justify-between relative h-full min-h-screen">
      {!messages.length ? <div className="px-4 py-3 flex items-center flex-col gap-4">
        <BotIcon className=" text-gray-400  animate-bounce duration-700"
          size={60}
          strokeWidth={1}
        />
        <h1 className="text-xl font-normal font-sans text-gray-400">I am your personalized AI assistant.
          Ask me anything about your subscriptions.</h1>
      </div> : null}

      <div className=' w-full pr-10 h-full flex flex-col gap-4 max-h-[700px] overflow-y-auto'>
        {messages.map(m => (
          <div key={m.id} className={`flex  gap-6 w-full h-full ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} `}>
            {m.role === 'user' ? '' :
              <BotIcon className=" text-orange-600 mt-2 ml-1 "
                size={32}
                strokeWidth={1}
              />}

            <div className={`  whitespace-pre-wrap px-4 flex w-full py-4 rounded-lg border border-dashed text-base font-normal gap-0 flex-col
          ${m.role === 'user' ? 'bg-neutral-50 border-0' : 'bg-white'}
        `}>
              {m.content}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="absolute bottom-0 w-full placeholder:text-sm text-base outline-none px-4 py-3  mb-10 border border-dashed rounded "
          value={input}
          placeholder="Ask any question regarding your subscriptions...."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default ChatClient