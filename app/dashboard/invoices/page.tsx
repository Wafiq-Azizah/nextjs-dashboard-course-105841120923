import { Suspense } from 'react';
import InvoicesTable from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

// ✅ Type for searchParams (can be extended later)
interface PageProps {
  searchParams?: {
    query?: string;
    page?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  const query = searchParams?.query ?? '';
  const currentPage = parseInt(searchParams?.page ?? '1', 10);

  return (
    <main>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InvoicesTable query={query} currentPage={currentPage} />
      </Suspense>
    </main>
  );
}
