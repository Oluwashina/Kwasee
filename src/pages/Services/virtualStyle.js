import React from 'react';
import virtual_img from '../../assets/service2.png'


const VirtualStylePage = () => {
    return ( 
        <>
            <div className='grid md:grid-cols-2 gap-4 px-4 md:px-8 mt-4 mb-4'>
                <div>
                    <h6 className='font-della font-medium max-w-md md:leading-[140%] tracking-wide text-[#262220] text-xl md:text-3xl'>
                    Virtual styling and personal shopping </h6>
                    <div className='mt-4 md:mt-6'>       
                        <p className='font-raleway text-sm md:text-base tracking-wide'>
                        As your virtual stylist/personal shopper, we select clothing and accessories that flatter the client, fit their budget and suit their tastes.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        A virtual stylist means never meeting your client in person. Depending on the client's goals, we help design a professional wardrobe, pick out items for special occasions or help clients define and refine their personal look.
                        </p>
                    </div>
                </div>
                <div>
                  <img src={virtual_img} alt="virtual" className='w-full' />  
                </div>


            </div>
        </>
     );
}
 
export default VirtualStylePage;