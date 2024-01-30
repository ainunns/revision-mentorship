import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

import { ProductType } from '@/types/products';

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className='flex w-full flex-col gap-6 rounded-lg border border-gray-200 p-4 shadow-md'>
      <div className='flex flex-col gap-2'>
        <h3>{product.title}</h3>
        <h6>${product.price}</h6>
      </div>
      <ButtonLink
        href={`/products/${product.id}`}
        variant='primary'
        className='flex justify-center'
      >
        See Detail
      </ButtonLink>
    </div>
  );
}
