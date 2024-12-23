import { getAll } from '@/app/actions/SubscriptionService';
import ChatClient from './ChatClient';

async function ChatWrapper({ userId }: { userId: string }) {
  const subscriptions = await getAll(userId as string);
  if (!subscriptions) return null;

  return (
    <ChatClient subscriptions={subscriptions} />
  )
}

export default ChatWrapper