import React from 'react';

import TableBody from '@/pages/products/components/TableBody';
import TableHead from '@/pages/products/components/TableHead';

import { ProductType } from '@/types/products';

type TableProps = {
  title: string[];
  data: ProductType[];
};

export default function Table({ title, data }: TableProps) {
  return (
    <div className='mt-5 w-full overflow-hidden rounded-lg border border-gray-200 shadow-md'>
      <table className='w-full border-collapse bg-white text-left text-sm text-gray-500'>
        <TableHead title={title} />
        <TableBody data={data} />
      </table>
    </div>
  );
}
