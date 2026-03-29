import React, { Suspense, use } from 'react';
import ProductCard from '../productCard/ProductCard';
// const api=fetch("mens.json").then(res=> res.json())
const Mens = ({MensApi}) => {
    const datas=use(MensApi)
    return (
        <div className='w-[95%] mx-auto mt-12'>
            <h2 className='text-xl font-semibold'>Mens</h2>
            <h1 className='text-2xl font-bold'>ONYX FOMO? <span className='text-lg font-semibold ml-5 border-b-2'>View All</span></h1>

            {/* card here */}
           <div className='mt-6 grid grid-cols-4 gap-2'>
             {
                datas.map(data=> {
                    return <ProductCard key={data.id} data={data}></ProductCard>
                })
             }
           </div>


         

        </div>
    );
};





export default Mens;