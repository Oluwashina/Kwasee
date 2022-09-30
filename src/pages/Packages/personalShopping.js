import React from 'react';
import pic2 from '../../assets/shopping.png'

const PersonalShoppingPage = () => {
    return ( 
        <>
          <div className=''>
                <div className='relative'>
                    <img src={pic2} alt="pic2" className='object-cover w-full' />       
                </div>
                <div className='bg-[#725C5C] text-center py-4 md:py-6'>
                    <h6 className='text-white text-lg md:text-2xl font-della tracking-wide font-medium'>Assisted Personal Shopping </h6>
                </div>
                <div className='pt-8 md:pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                      <p className='text-[#262220] opacity-[.75] md:text-center font-della mt-2 tracking-wide'>$250/PER LOOK</p>
                        <div className='md:text-center font-raleway'>
                            <h6 className='text-[#000000] text-base font-della tracking-wide mt-6 leading-6'>ASSISTED PERSONAL SHOPPING:</h6>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This service includes a member of the team accompanying you to a physical store to assist you while you shop.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This is done in order for our customers to purchase the necessary items needed in their wardrobe and also avoid buying unnecessary fashion pieces that are not versatile.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            This helps the customer save both time and money
                            </p>
                        </div>
                    </div>
                </div>         
            </div>
        </>
     );
}
 
export default PersonalShoppingPage;