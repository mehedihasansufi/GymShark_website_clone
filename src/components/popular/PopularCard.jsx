import React from 'react';

const PopularCard = ({data}) => {
    return (
        <div>
            <div>
                <img src={data.image} alt="" />
                <h2 className='mt-2 font-bold text-lg'>{data.name}</h2>
                <p className='text-[#00000090]'>{data.tagline}</p>
            </div>
        </div>
    );
};

export default PopularCard;