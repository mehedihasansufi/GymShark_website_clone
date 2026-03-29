
import { use } from 'react';
import ProductCard from '../productCard/ProductCard';
import PopularCard from './PopularCard';

const Womens = ({popularWomensApi}) => {
    const datas=use(popularWomensApi)
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

export default Womens;