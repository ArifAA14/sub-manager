import ChatSkeleton from '@/components/Chat/ChatSkeleton';
import ChatWrapper from '@/components/Chat/ChatWrapper';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import { auth } from '../../../auth';

export default async function Chat() {
  const session = await auth()
  if (!session) {
    redirect('/')
  }
  const userId = session?.user?.id;
  if (!userId) {
    return null
  }


  return (
    <Suspense fallback={<ChatSkeleton />}>
      <ChatWrapper userId={userId as string} />
    </Suspense>
  );
}
