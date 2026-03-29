import React, { Suspense, useState } from 'react';
import './popular.css'
import Mens from './Mens';
import Womens from './Womens';

const popularWomensApi = fetch('popularWomens.json').then(res => res.json())
const popularMansApi=fetch("popularMans.json").then(res=> res.json())

const Popular = () => {
    const [activeTab, setActiveTab] = useState('women')
    return (
        <div className='w-[95%] mx-auto mt-12'>
            <h1 className='font-bold text-3xl'>POPULAR RIGHT NOW</h1>

            <div className='flex gap-3 mt-4'>
                <button onClick={() => setActiveTab('women')} className={`bg-gray-200 p-2 px-4 rounded-3xl text-lg shadow hover ${activeTab === 'women' ? 'active-tab' : ''}`}>Women</button>


                <button onClick={() => setActiveTab('men')} className={`bg-gray-200 p-2 px-4 rounded-3xl text-lg shadow hover ${activeTab === 'men' ? 'active-tab' : ''}`}>Men</button>
            </div>

            {/* women and men card container */}

            <div className='mt-12'>
                <Suspense fallback={<p>loading...</p>}>
                    {
                        activeTab === 'men' ?
                            <Mens popularMansApi={popularMansApi}></Mens> :
                            <Womens popularWomensApi={popularWomensApi}></Womens>
                    }
                </Suspense>
            </div>





        </div>
    );
};

export default Popular;