import { fetchFilteredInvoices, fetchInvoicesPages } from '@/app/lib/data';
import  InvoicesTable  from '@/app/ui/invoices/table';
import  Search  from '@/app/ui/search';
import Pagination from '@/app/ui/pagination';

export default async function InvoicesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const invoices = await fetchFilteredInvoices(query, currentPage);
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Invoices</h1>
        <Search placeholder="Search invoices..." />
      </div>

      <InvoicesTable query="" currentPage={1} />

      <Pagination totalPages={totalPages} />
    </div>
  );
}
