import { getAll } from '@/app/actions/SubscriptionService';
import ChatClient from './ChatClient';
import SubscriptionEmpty from '../Subs/SubscriptionEmpty';

async function ChatWrapper({ userId }: { userId: string }) {
  const subscriptions = await getAll(userId as string);
  if (!subscriptions) return <SubscriptionEmpty />

  return (
    <ChatClient subscriptions={subscriptions} />
  )
}

export default ChatWrapper