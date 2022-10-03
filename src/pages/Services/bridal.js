import React from 'react';
import bridal_img from '../../assets/bridal_style.svg'

const BridalStylePage = () => {
    return ( 
        <>
            <div className='grid md:grid-cols-2 gap-4 px-4 md:px-8 mt-4 mb-4'>
                <div>
                    <h6 className='font-della font-medium tracking-wide text-[#262220] text-xl md:text-3xl'>Bridal Styling</h6>
                    <div className='mt-4 md:mt-6'>       
                        <p className='font-raleway text-sm md:text-base tracking-wide'>
                        As your bridal stylist, we will get started by creating a clear vision of how you want to look on your wedding day.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        Then we will help you zero in on wedding dress styles that flatter your figure, fit your venue, and schedule your appointments.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        We will also accompany you to each fitting so that you always have an expert available for support. We will source the perfect finishing touches and be present on your wedding day to make sure every detail is picture-perfect.
                        </p>
                    </div>
                </div>
                <div>
                  <img src={bridal_img} alt="bridal" className='w-full' />  
                </div>


            </div>
        </>
     );
}
 
export default BridalStylePage;