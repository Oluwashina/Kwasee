import React from 'react';
import pic2 from '../../assets/birthday_img.png'

const BirthdayShootPage = () => {
    return ( 
        <>
          <div className=''>
                <div className='relative'>
                    <img src={pic2} alt="pic2" className='object-cover w-full' />            
                </div>
                <div className='bg-[#725C5C] text-center py-4 md:py-6'>
                    <h6 className='text-white text-lg md:text-2xl font-della tracking-wide font-medium'>Birthday Shoot </h6>
                </div>
                <div className='pt-8 md:pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                      <p className='text-[#262220] opacity-[.75] md:text-center font-della mt-2 tracking-wide'>$106/PER LOOK</p>
                        <div className='md:text-center font-raleway'>
                            <h6 className='text-[#000000] font-della text-base tracking-wide mt-6 leading-6'>BIRTHDAY SHOOT:</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This package includes curating a mood board guide that best suits the theme of your birthday shoot.
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
 
export default BirthdayShootPage;