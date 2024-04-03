import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import {
  CardSkeleton,
  InvoiceSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';
import { Metadata } from 'next';
import SocialLinks from '@/app/ui/dashboard/social-links';

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
