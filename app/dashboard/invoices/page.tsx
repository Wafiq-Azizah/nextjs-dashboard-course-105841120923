import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/table';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <main>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
