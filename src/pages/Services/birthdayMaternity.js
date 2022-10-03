import React from 'react';
import birthday_img from '../../assets/service1.png'

const BirthdayMaternityPage = () => {
    return ( 
        <>
            <div className='grid md:grid-cols-2 gap-4 px-4 md:px-8 mt-4 mb-4'>
                <div>
                    <h6 className='font-della max-w-sm font-medium md:leading-[140%] tracking-wide text-[#262220] text-xl md:text-3xl'>
                    Birthday & <br/> Maternity Styling 
                    </h6>
                    <div className='mt-4 md:mt-6'>       
                        <p className='font-raleway text-sm md:text-base tracking-wide'>
                        This is the ideal service to book if you have a closet full clothes but don’t feel confident in putting the looks together.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        We can help you create new looks out of the clothes you already own or source new outfits to accomplish the theme of your birthday shoot.
                        </p>          
                    </div>
                </div>
                <div>
                  <img src={birthday_img} alt="birthday" className='w-full' />  
                </div>


            </div>
        </>
     );
}
 
export default BirthdayMaternityPage;