import React, { use } from 'react';
import ProductCard from '../productCard/ProductCard';

const WelcomeToYourEdit = ({welcomeToYourEditApi}) => {
    const datas=use(welcomeToYourEditApi)
    return (
        <div className='w-[95%] mx-auto'>
            <div className='mt-12'>
                <h1 className='text-3xl font-bold'>Welcome to your edit <span className='text-lg font-semibold ml-5 border-b-2'>View All</span></h1>
            </div>

            <div className='grid grid-cols-5 gap-2 mt-8'>
                {
                    datas.map(data=> {
                        return <ProductCard key={data.id} data={data}></ProductCard>
                    })
                }
            </div>
        </div>
    );
};

export default WelcomeToYourEdit;