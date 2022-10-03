import React from 'react';
import fashion_img from '../../assets/service3.png'


const FashionConsultPage = () => {
    return ( 
        <>
            <div className='grid md:grid-cols-2 gap-4 px-4 md:px-8 mt-4 mb-4'>
                <div>
                    <h6 className='font-della font-medium max-w-md md:leading-[140%] tracking-wide text-[#262220] text-xl md:text-3xl'>
                    Fashion Consultation </h6>
                    <div className='mt-4 md:mt-6'>       
                        <p className='font-raleway text-sm md:text-base tracking-wide'>
                        As your fashion consultants, we help with wardrobe improvements.
                        </p>
                        <p className='font-raleway text-sm md:text-base tracking-wide mt-4'>
                        We help our clients make clothing style choices appropriate to a variety of situations, including personal and business settings and often, make recommendations on accessories too.
                        </p>
                    </div>
                </div>
                <div>
                  <img src={fashion_img} alt="fashion" className='w-full' />  
                </div>


            </div>
        </>
     );
}
 
export default FashionConsultPage;