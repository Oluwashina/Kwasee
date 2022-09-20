import React from 'react';
import pic2 from '../../assets/pic2.png'

const AboutPage = () => {
    return ( 
        <>
            <div className='grid grid-cols-2 gap-6 pb-10'>
                <div>
                    <img src={pic2} alt="pic2" className='' /> 
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='md:px-10 px-6'>
                        <p className='text-[#262220] opacity-[.75] font-medium tracking-wide'>WELCOME TO KWASEE</p>
                        <h5 className='text-[#262220] font-semibold text-4xl mt-2 max-w-xs leading-[140%] tracking-wide'>THE JOURNEY BEGINS</h5>
                       <div className='max-w-xl'>
                            <p className='text-[#000000] text-sm tracking-wide mt-6 leading-6'>
                            Kwasee, a name curled from the rich origin of Benue State in Nigeria which means woman, is a fashion styling Company with certified styling experience, ground breaking records and a broad fashion knowledge that empowers women to become the best version of themselves through their clothing choices - one outfit at a time.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-6 leading-6'>
                            Since 2014, Kwasee has been offering styling services to women all over the world. Looking good and feeling good are two different things and at Kwasee, we help you achieve both.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-6 leading-6'>
                            We also help you discover a signature style that suits your personality and body type. It is not whether you or not you have a style, is it expressed through your clothes? Use your style as tool stand out.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-6 leading-6'>
                            Our goal is to help you elevate your style journey to the next.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutPage;