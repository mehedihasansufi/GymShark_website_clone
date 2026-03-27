import heroImg from '../../assets/image.avif'

const Hero = () => {
    return (
        <div >
           <div className='relative'>
                 <img src={heroImg} alt="" />
                 <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none'></div>


                 <div className='absolute left-10 bottom-8 text-white  w-2/4'>
                    <h1 className='text-2xl font-bold'>ONYX FOMO?</h1>
                    <p className='mt-4 text-sm'>Onyx is sold out, but check out these other compression tops <br />  that’ll also make your arms look huge.</p>
                    
                    <button className='mt-4 font-bold border-b-2 pb-1 border-bs-white'>Shop Now</button>
                 </div>
           </div>
        </div>
    );
};

export default Hero;