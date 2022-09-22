import React from 'react';
// import pic2 from '../../assets/about_img.png'

const PersonalShoppingPage = () => {
    return ( 
        <>
          <div className=''>
                <div className='relative h-[400px] bg-shopping bg-cover bg-center overflow-hidden md:h-[800px] flex'>
                    {/* <img src={pic2} alt="pic2" className='object-cover w-full' />  */}
                    <div>
                     <h5 className='hidden md:block text-[#FFFFFF] text-center absolute bottom-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-2xl md:text-3xl mt-2 max-w-lg leading-[140%] tracking-wide'>
                     Assisted Personal Shopping</h5>
                    </div>
                </div>
                <div className='pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                    <h5 className='text-[#262220] md:hidden text-lg md:text-3xl max-w-md leading-[140%] tracking-wide'>Assisted Personal Shopping</h5>
                      <p className='text-[#262220] opacity-[.75] md:text-center italic mt-2 tracking-wide'>$250/PER LOOK</p>
                        <div className='md:text-center'>
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