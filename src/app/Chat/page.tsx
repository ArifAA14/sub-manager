import ChatClient from '@/components/Chat/ChatClient';
import { redirect } from 'next/navigation';
import { auth } from '../../../auth';
import { getAll } from '../actions/SubscriptionService';

export default async function Chat() {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  const userId = session?.user?.id;
  if (!userId) {
    return null
  }
  const subscriptions = await getAll(userId as string);
  if (!subscriptions) {
    return null
  }

  return (
    <ChatClient subscriptions={subscriptions} />
  );
}
