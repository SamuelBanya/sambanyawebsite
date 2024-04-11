import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import SocialLinks from '@/app/ui/home/social-links';

export const metadata: Metadata = {
  title: 'Links',
};

export default async function Page() {
  return (
    <main>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<CardSkeleton />}>
          <SocialLinks />
        </Suspense>
      </div>
    </main>
  );
}
