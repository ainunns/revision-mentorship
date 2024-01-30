import { BookMarked } from 'lucide-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
            <BookMarked size={48} />
            <h1 className='mt-4'>Revision-Style Mentorship</h1>
            <p className='mt-2 text-gray-500'>
              A template for revision-style mentorship by Theodorus Clarence
            </p>
            <p>
              See the{' '}
              <ArrowLink as={PrimaryLink} className='mt-2' href='/api-tester'>
                /api-tester
              </ArrowLink>
            </p>
            <p>
              Or go to the demo{' '}
              <ArrowLink as={PrimaryLink} className='mt-2' href='/products'>
                /products
              </ArrowLink>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
