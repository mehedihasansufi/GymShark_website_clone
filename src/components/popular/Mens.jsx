import React, { use } from 'react';
import PopularCard from './PopularCard';

const Mens = ({popularMansApi}) => {
    const datas=use(popularMansApi)

    return (
         <div className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
            {
                datas.map(data=> {
                    return <PopularCard key={data.id} data={data}></PopularCard>
                })
            }
        </div>
    );
};

export default Mens;