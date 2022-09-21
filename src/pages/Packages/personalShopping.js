import React from 'react';
import pic2 from '../../assets/pic2.png'


const PersonalShoppingPage = () => {
    return ( 
        <>
             <div className='grid md:grid-cols-2 md:gap-6'>
                <div>
                    <img src={pic2} alt="pic2" className='' /> 
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='md:px-10 px-4 py-10 md:py-0'>
                      <h5 className='text-[#262220] text-lg md:text-3xl max-w-md leading-[140%] tracking-wide'>Assisted Personal Shopping </h5>
                        <p className='text-[#262220] opacity-[.75] mt-2 tracking-wide'>$250/PER LOOK</p>
                       <div className='max-w-xl'>
                            <h6 className='text-[#000000] text-base tracking-wide mt-6 leading-6'>ASSISTED PERSONAL SHOPPING:</h6>
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