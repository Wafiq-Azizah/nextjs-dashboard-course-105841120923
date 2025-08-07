'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { generatePagination } from '@/app/lib/utils';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get('page')) || 1;
  const query = searchParams.get('query') || '';

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="mt-4 flex justify-center">
      <div className="flex items-center gap-2">
        {allPages.map((page, index) => {
          return typeof page === 'number' ? (
            <Link
              key={index}
              href={`${pathname}?page=${page}&query=${query}`}
              className={`px-4 py-2 border text-sm rounded-lg ${
                page === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700'
              }`}
            >
              {page}
            </Link>
          ) : (
            <span key={index} className="px-2 text-gray-500">
              ...
            </span>
          );
        })}
      </div>
    </div>
  );
}
