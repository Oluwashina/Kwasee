import React from 'react';
import pic2 from '../../assets/about_img.png'

const VirtualStylingPage = () => {
    return ( 
        <>
         <div className=''>
                <div className='relative h-[400px] overflow-hidden md:h-[800px] flex'>
                    <img src={pic2} alt="pic2" className='object-cover w-full' /> 
                    <div>
                     <h5 className='hidden md:block text-[#FFFFFF] text-center absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold  text-2xl md:text-3xl mt-2 max-w-xs leading-[140%] tracking-wide'>
                       Virtual Styling</h5>
                    </div>
                </div>
                <div className='pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                      <h5 className='text-[#262220] md:hidden text-lg md:text-3xl max-w-md leading-[140%] tracking-wide'>Virtual Styling</h5>
                        <p className='text-[#262220] md:text-center opacity-[.75] italic mt-2 tracking-wide'>Our virtual styling includes 2 packages</p>
                       <div className='md:text-center'>
                            <h6 className='text-[#000000] text-base tracking-wide mt-6 leading-6'>CLOSET EDIT($100):</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This includes a one-hour closet edit. A Closet Edit is more than a shopping service—it’s an experience to help you find clothing that brings out your natural confidence, to take you to the next level.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            Learn how to make new outfits with what you already own. Make the best of your current wardrobe. We are certain that it has the potential to be a lot more than it is now.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            It also includes a customized shopping list based on clothing gaps.
                            </p>

                            <h6 className='text-[#000000] text-base tracking-wide mt-6 leading-6'>IMAGE CONSULTATION($150):</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This package includes a 1hr closet edit.
                              </p>
                              <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                              learn how to make new outfits with what you already own. Make the best of your current wardrobe.
                              </p>
                              <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                              It also includes a customized shopping list and links to order.
                              </p>
                              <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                              A one-month supply and access to our lead stylist
                              </p>
                        </div>
                    </div>
                </div>         
            </div>
         
        </>
     );
}
 
export default VirtualStylingPage;