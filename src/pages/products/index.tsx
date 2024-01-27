import axios from 'axios';
import { Plus } from 'lucide-react';
import React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Table from '@/pages/products/components/Table';
import { TABLE_HEAD_TITLE } from '@/pages/products/constant/table';

import { ApiReturn } from '@/types/api';
import { ProductType } from '@/types/products';

export default function ProductList() {
  const [productsData, setProductsData] = React.useState<ProductType[]>([]);
  React.useEffect(() => {
    axios
      .get<ApiReturn<ProductType[]>>('/api/product')
      .then((res) => setProductsData(res.data.data));
  }, []);

  return (
    <Layout>
      <Seo templateTitle='List Products' />
      <main className='relative min-h-screen w-full bg-white py-24'>
        <section className='layout relative flex flex-col gap-4'>
          <h1>List Products</h1>
          <div className='flex flex-row justify-end'>
            <Button variant='primary' className='mr-2' leftIcon={Plus}>
              Add Product
            </Button>
          </div>
        </section>
        <section className='layout relative'>
          <Table title={TABLE_HEAD_TITLE} data={productsData} />
        </section>
      </main>
    </Layout>
  );
}
