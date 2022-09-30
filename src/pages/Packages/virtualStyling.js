import React from 'react';
import pic2 from '../../assets/virtual1.png'

const VirtualStylingPage = () => {
    return ( 
        <>
         <div className=''>
                <div className='relative'>
                    <img src={pic2} alt="pic2" className='w-full' /> 
                </div>
                <div className='bg-[#725C5C] text-center py-4 md:py-6'>
                    <h6 className='text-white text-lg md:text-2xl font-della tracking-wide font-medium'>Virtual Styling </h6>
                </div>
                <div className='pt-8 md:pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                        <p className='text-[#262220] md:text-center font-della opacity-[.75]  mt-2 tracking-wide'>Our virtual styling includes 2 packages</p>
                       <div className='md:text-center font-raleway'>
                            <h6 className='text-[#000000] font-della text-base tracking-wide mt-6 leading-6'>CLOSET EDIT($100):</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This includes a one-hour closet edit. A Closet Edit is more than a shopping service—it’s an experience to help you find clothing that brings out your natural confidence, to take you to the next level.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            Learn how to make new outfits with what you already own. Make the best of your current wardrobe. We are certain that it has the potential to be a lot more than it is now.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            It also includes a customized shopping list based on clothing gaps.
                            </p>

                            <h6 className='text-[#000000] font-della text-base tracking-wide mt-6 leading-6'>IMAGE CONSULTATION($150):</h6>
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