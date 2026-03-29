import React, { use } from 'react';
import ProductCard from '../productCard/ProductCard';

const image = 'https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F3twn5fgETzXo3SEY14tOA7%2Fcb1c981a1bec2def152cacf0807835b3%2FHeadless_Desktop_-_25910682.jpeg&w=1920&q=85'

const Womens = ({WomensApi}) => {
    const datas=use(WomensApi)
    return (
        <div className='mt-12 '>
            <div className='relative'>
                <img src={image} alt="" />
                <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none'></div>
                <div className='absolute bottom-8 text-white left-8 flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>FOR PUSH, PULL & LEG DAYS</h1>
                    <p className='font-semibold'>So your only focus is hitting that last rep as hard as you can.</p>
                    <div>
                        <button className='font-bold border-b-2'>Shop Women's</button>
                    </div>
                </div>

            </div>


            <div className='w-[95%] mx-auto mt-12'>
                <h2 className='text-xl font-semibold'>Womens</h2>
                <h1 className='text-2xl font-bold'>FOR PUSH, PULL & LEG DAYS <span className='text-lg font-semibold ml-5 border-b-2'>View All</span></h1>

                {/* card here */}
                <div className='mt-6 grid grid-cols-4 gap-2'>
                    {
                        datas.map(data=> {
                            return <ProductCard key={data.id} data={data}></ProductCard>
                        })
                    }
                </div>




            </div>

        </div>
    );
};

export default Womens;