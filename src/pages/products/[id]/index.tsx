import axios from 'axios';
import { Pencil, Plus, Trash2Icon } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

import NotFoundPage from '@/pages/404';

import { ApiReturn } from '@/types/api';
import { ProductType } from '@/types/products';

export default function DetailProduct() {
  const [productData, setProductData] = React.useState<ProductType | null>(
    null
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    if (!id) return;
    axios
      .get<ApiReturn<ProductType>>(`/api/product/${id}`)
      .then((res) => setProductData(res.data.data))
      .finally(() => setIsLoading(false));
  }, [id]);

  const onDelete = (id: number) => {
    axios.delete(`/api/product/${id}`).then(() => router.push('/products'));
  };

  if (isLoading) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
        <ImSpinner8 className='mb-4 animate-spin text-4xl' />
        <p>Loading...</p>
      </div>
    );
  }

  if (!productData) return <NotFoundPage />;

  return (
    <Layout>
      <Seo templateTitle={productData.title} />
      <main className='relative min-h-screen w-full bg-white py-24'>
        <section className='layout relative flex flex-col gap-8'>
          <div className='flex flex-row items-center justify-between'>
            <ArrowLink direction='left' href='/products' className='w-fit'>
              Back to Products List
            </ArrowLink>
            <ButtonLink
              href='/products/create'
              variant='primary'
              className='mr-2 h-fit w-fit'
              leftIcon={Plus}
            >
              Add Product
            </ButtonLink>
          </div>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-medium text-gray-900'>
                Title
              </label>
              <input
                type='text'
                id='title'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                value={productData.title}
                placeholder='Title of the product'
                readOnly={true}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-medium text-gray-900'>
                Description
              </label>
              <input
                type='text'
                id='description'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                value={productData.description}
                placeholder='Description of the product'
                readOnly={true}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-medium text-gray-900'>
                Price (USD)
              </label>
              <input
                type='text'
                id='price'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                value={productData.price}
                placeholder='0.00'
                readOnly={true}
              />
            </div>
          </form>
          <div className='flex flex-row items-center gap-4'>
            <Button
              variant='primary'
              className='mr-2 h-fit w-fit'
              leftIcon={Pencil}
            >
              Edit Product
            </Button>
            <Button
              variant='primary'
              className='mr-2 h-fit w-fit'
              leftIcon={Trash2Icon}
              onClick={() => onDelete(productData.id)}
            >
              Delete Product
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
}
