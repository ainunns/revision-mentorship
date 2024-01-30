import axios from 'axios';
import { Save } from 'lucide-react';
import React, { FormEvent } from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

export default function DetailProduct() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const description = (
      document.getElementById('description') as HTMLInputElement
    ).value;
    const price = Number(
      (document.getElementById('price') as HTMLInputElement).value
    );

    const body = {
      id: +Date.now() / 1000,
      title,
      description,
      price,
    };

    axios
      .post('/api/product', body)
      .then(() => {
        alert('Product created successfully');
        window.location.href = '/products';
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Layout>
      <Seo templateTitle='Create New Product' />
      <main className='relative min-h-screen w-full bg-white py-24'>
        <section className='layout relative flex flex-col gap-8'>
          <ArrowLink direction='left' href='/products' className='w-fit'>
            Back to Products List
          </ArrowLink>
          <h1>Create New Product</h1>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-semibold text-gray-900'>
                Title<span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='title'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Title of the product'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-semibold text-gray-900'>
                Description<span className='text-red-500'>*</span>
              </label>
              <textarea
                id='description'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Description of the product'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='block text-sm font-semibold text-gray-900'>
                Price (USD)<span className='text-red-500'>*</span>
              </label>
              <input
                type='number'
                id='price'
                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
                placeholder='0.00'
                step={0.01}
                required
              />
            </div>
            <Button
              type='submit'
              variant='primary'
              className='mr-2 h-fit w-fit'
              leftIcon={Save}
            >
              Save Product
            </Button>
          </form>
        </section>
      </main>
    </Layout>
  );
}
