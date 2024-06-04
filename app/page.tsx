import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import BandLinks from '@/app/ui/home/band-links';

export const metadata: Metadata = {
  title: 'Links',
};

export default async function Page() {
  return (
    <main>
      <div data-theme="greytheme">
        <Suspense fallback={<CardSkeleton />}>
          <BandLinks />
        </Suspense>
      </div>
    </main>
  );
}
