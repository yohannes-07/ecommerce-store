import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'

const HomePage = async () => {
  const products  = await getProducts({isFeatured:true});
  const billboard = await getBillboard('204db459-2621-4493-b20e-c268710b94c4');
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
            <ProductList title='Featured Products' items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage