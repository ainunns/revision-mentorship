import React from 'react';

export default function TableHead({ title }: { title: string[] }) {
  return (
    <thead className='bg-gray-50'>
      <tr>
        {title.map((item) => (
          <th
            key={item}
            scope='col'
            className='px-6 py-4 font-medium text-gray-900'
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
}
