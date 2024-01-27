import axios from 'axios';
import { Plus } from 'lucide-react';
import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import Table from '@/pages/products/components/Table';
import { TABLE_HEAD_TITLE } from '@/pages/products/constant/table';

import { ApiReturn } from '@/types/api';
import { ProductType } from '@/types/products';

export default function ProductList() {
  const [productsData, setProductsData] = React.useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    axios
      .get<ApiReturn<ProductType[]>>('/api/product')
      .then((res) => setProductsData(res.data.data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Layout>
      <Seo templateTitle='List Products' />
      <main className='relative min-h-screen w-full bg-white py-24'>
        <section className='layout relative flex flex-col gap-4'>
          <h1>List Products</h1>
          <div className='flex flex-row justify-end'>
            <ButtonLink
              href='/products/create'
              variant='primary'
              className='mr-2'
              leftIcon={Plus}
            >
              Add Product
            </ButtonLink>
          </div>
        </section>
        <section className='layout relative'>
          {isLoading ? (
            <div className='flex flex-col items-center justify-center py-4 text-gray-800'>
              <ImSpinner8 className='mb-4 animate-spin text-4xl' />
              <p>Loading...</p>
            </div>
          ) : productsData.length > 0 ? (
            <Table title={TABLE_HEAD_TITLE} data={productsData} />
          ) : (
            <div className='flex flex-col items-center justify-center py-4 text-gray-800'>
              <p>No data found</p>
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}
