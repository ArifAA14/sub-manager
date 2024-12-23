import ChatWrapper from '@/components/Chat/ChatWrapper';
import FullSkeleton from '@/components/ui/Skeleton/FullSkeleton';
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
    <Suspense fallback={<FullSkeleton />}>
      <ChatWrapper userId={userId as string} />
    </Suspense>
  );
}
