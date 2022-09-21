import React from 'react';
import pic2 from '../../assets/pic2.png'

const MaternityShootPage = () => {
    return (
        <>
             <div className='grid md:grid-cols-2 md:gap-6'>
                <div>
                    <img src={pic2} alt="pic2" className='' /> 
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='md:px-10 px-4 py-10 md:py-0'>
                      <h5 className='text-[#262220] text-lg md:text-3xl max-w-md leading-[140%] tracking-wide'>Maternity Shoot </h5>
                        <p className='text-[#262220] opacity-[.75] mt-2 tracking-wide'>$106/PER LOOK</p>
                       <div className='max-w-xl'>
                            <h6 className='text-[#000000] text-base tracking-wide mt-6 leading-6'>MATERNITY SHOOT:</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This package includes curating a mood board guide that best suits the theme of your maternity shoot
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            On the day of the shoot, we will be there to style the clothes to create a very detailed look.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This also includes referring makeup artists and hairstylists to create looks that have been curated in the mood board to bring your vision to life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
      );    
}
 
export default MaternityShootPage;