import React from 'react';
// import pic2 from '../../assets/about_img.png'

const AboutPage = () => {
    return ( 
        <>
            <div className=''>
                <div className='relative bg-hero bg-cover h-[400px] overflow-hidden md:h-[800px] flex'>
                    {/* <img src={pic2} alt="pic2" className='object-cover w-full' />  */}
                    <div>
                     <h5 className='hidden md:block font-della text-[#FFFFFF] absolute md:bottom-16 md:left-10 font-semibold text-2xl md:text-3xl mt-2 max-w-xs md:leading-[140%] tracking-[0.05em]'>
                        THE JOURNEY BEGINS</h5>
                    </div>
                </div>
                <div className='pt-10 pb-20 md:max-w-xl mx-auto'>
                    <div className='md:px-10 px-4'>
                        <p className='text-[#262220] font-della md:text-base md:text-center opacity-[.75] font-medium tracking-wide'>WELCOME TO KWASEE</p>
                        <h5 className='md:hidden text-[#262220] font-della  text-2xl md:text-4xl mt-2 max-w-xs leading-[140%] tracking-wide'>
                        THE JOURNEY <br/> BEGINS</h5>
                       <div className='md:text-center font-raleway'>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            Kwasee, a name curled from the rich origin of Benue State in Nigeria which means woman, is a fashion styling Company with certified styling experience, groundbreaking records and broad fashion knowledge that empowers women to become the best version of themselves through their clothing choices - one outfit at a time.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            Since 2014, Kwasee has been offering styling services to women worldwide. Looking good and feeling good are two different things and at Kwasee, we help you achieve both
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                            We also help you discover a signature style that suits your personality and body type. It is not whether you or not you have a style, is it expressed through your clothes? Use your style as a tool to stand out.
                            </p>
                            <p className='text-[#000000] text-sm tracking-wide mt-4 leading-6'>
                                Our goal is to help you elevate your style journey to the next
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutPage;