import React from 'react';
// import pic2 from '../../assets/about_img.png'

const BirthdayShootPage = () => {
    return ( 
        <>
          <div className=''>
                <div className='relative bg-birthday bg-cover bg-center h-[400px] overflow-hidden md:h-[900px]'>
                    {/* <img src={pic2} alt="pic2" className='object-cover w-full' />  */}
                    <div>
                     <h5 className='hidden md:block text-[#FFFFFF] text-center absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold  text-2xl md:text-3xl mt-2 max-w-xs leading-[140%] tracking-wide'>
                     Birthday Shoot</h5>
                    </div>
                </div>
                <div className='pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                    <h5 className='text-[#262220] md:hidden text-lg md:text-3xl max-w-md leading-[140%] tracking-wide'>Birthday Shoot</h5>
                      <p className='text-[#262220] opacity-[.75] md:text-center italic mt-2 tracking-wide'>$106/PER LOOK</p>
                        <div className='md:text-center'>
                            <h6 className='text-[#000000] text-base tracking-wide mt-6 leading-6'>BIRTHDAY SHOOT:</h6>
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