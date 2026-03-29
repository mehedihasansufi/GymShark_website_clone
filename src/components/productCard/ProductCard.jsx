import { Heart } from 'lucide-react';


const ProductCard = ({data}) => {
    // console.log(data.image);
    
    
    return (
        <div className='cursor-pointer'>

            <div className=''>
                <div className='relative'>
                    <img src={data.image} alt="" />
                    <p className='bg-white absolute bottom-2 uppercase left-4 px-3 text-xs  font-bold rounded-xs py-1'>Out Of Stock</p>
                    <div className='absolute top-2 bg-white p-2 w-8 h-8 flex justify-center items-center right-2 rounded-full'>
                        <Heart strokeWidth={1} width={15}></Heart>
                    </div>

                </div>

                <div className='px-2 mt-1'>
                    <div className='flex justify-between'>
                        <p>{data.name}</p>
                        <p className='font-bold text-xs'>{data.rating}</p>
                    </div>


                    <div className='flex flex-col gap-1 mt-1'>
                        <p className='text-[#00000090]'>{data.fit}</p>
                        <p className='text-[#00000090]'>{data.color}</p>
                        <p className='font-bold'>US${data.price}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;