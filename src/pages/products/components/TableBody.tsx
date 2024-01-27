import { EyeIcon, PencilIcon, Trash } from 'lucide-react';
import React from 'react';

import IconButton from '@/components/buttons/IconButton';
import UnstyledLink from '@/components/links/UnstyledLink';

import { ProductType } from '@/types/products';

export default function TableBody({ data }: { data: ProductType[] }) {
  return (
    <tbody className='divide-y divide-gray-100 border-t border-gray-100'>
      {data.map((product) => (
        <tr className='hover:bg-gray-50' key={product.id}>
          <th className='flex gap-3 px-6 py-4 font-normal text-gray-900'>
            <p className='text-sm font-medium'>{product.id}</p>
          </th>
          <td className='px-6 py-4'>
            <p className='text-sm font-medium'>{product.title}</p>
          </td>
          <td className='px-6 py-4'>
            <p className='truncate text-sm font-medium'>
              {product.description}
            </p>
          </td>
          <td className='px-6 py-4'>
            <p className='text-sm font-medium'>{product.price}</p>
          </td>
          <td className='px-6 py-4'>
            <div className='flex justify-center gap-4'>
              <UnstyledLink href={`/products/${product.id}`}>
                <IconButton
                  icon={EyeIcon}
                  variant='ghost'
                  className='text-primary-500'
                  classNames={{ icon: 'h-6 w-6' }}
                />
              </UnstyledLink>
              <UnstyledLink href={`/products/${product.id}?edit=true`}>
                <IconButton
                  icon={PencilIcon}
                  variant='ghost'
                  className='text-primary-900'
                  classNames={{ icon: 'h-6 w-6' }}
                />
              </UnstyledLink>
              <IconButton
                icon={Trash}
                variant='ghost'
                className='text-red-500'
                classNames={{ icon: 'h-6 w-6' }}
              />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
