import React from 'react';
import commercial_img from '../../assets/commercial_style.svg'


const CommercialStylePage = () => {
    return ( 
        <>
            <div className='grid md:grid-cols-2 gap-4 px-4 md:px-8 mt-4 mb-4'>
                <div>
                    <h6 className='font-della font-medium tracking-wide text-[#262220] text-xl md:text-3xl'>Commercial Styling </h6>
                    <div className='mt-4 md:mt-6'>       
                        <p className='font-raleway text-sm md:text-base tracking-wide'>
                        We will work with the concept of the Photoshoot sent by the brand, create a mood board that best interprets the vision of the client, select the perfect outfits, based on the shoot concept, models and brand colors, and be on set the day of the shoot to make sure everything goes off without a hitch.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        We will steam the dresses, handle any fashion emergencies. 
                        </p>
                    </div>
                </div>
                <div>
                  <img src={commercial_img} alt="commercial" className='w-full' />  
                </div>


            </div>
        </>
     );
}
 
export default CommercialStylePage;