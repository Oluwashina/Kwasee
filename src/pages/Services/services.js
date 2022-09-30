import React from 'react';
import bridal_img from '../../assets/bridal_style.svg'
import birthday_img from '../../assets/service1.png'
import commercial_img from '../../assets/commercial_style.svg'
import fashion_img from '../../assets/service3.png'
import virtual_img from '../../assets/service2.png'

const ServicesPage = () => {
    return ( 
        <>
            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest font-della text-center font-medium text-2xl'>Our Services</h6>
               
                <div className='mt-4 md:px-8 px-4 md:hidden'>
                    <div className='border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] py-6'>
                        <h4 className='text-[#262220] text-center text-lg md:text-xl font-della font-medium tracking-wide'>Bridal Styling</h4>
                        <div className='font-raleway'>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-3'>
                            As your bridal stylist, we will get started by creating a clear vision of how you want to look on your wedding day. Then we will help you zero in on wedding dress styles that flatter your figure, fit your venue, and schedule your appointments. 
                            </p>
                            <div className='mt-4'>
                                <img src={bridal_img} alt="birthday" className='' />
                            </div>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            We will also accompany you to each fitting so that you always have an expert available for support. We will source the perfect finishing touches and be present on your wedding day to make sure every detail is picture-perfect.
                            </p>
                        </div>
                    </div>
                    <div className='border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] py-6'>
                        <h4 className='text-[#262220] text-lg md:text-xl font-della text-center font-medium tracking-wide'>
                        Birthday & 
                            Maternity 
                            Styling 
                        </h4>
                        <div className='font-raleway'>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-3'>
                            We help you curate a mood board guide that best suits the theme of your birthday or maternity shoot. 
                            </p>
                            <div className='mt-4'>
                                <img src={birthday_img} alt="birthday" className='' />
                            </div>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            We also provide makeup artists and hairstylists that will also create looks that have been curated in the mood board to bring your vision to life. On the day of the shoot, we will be there to style the clothes to create a very detailed look
                            </p>
                        </div>
                    </div>
                    <div className='border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] py-6'>
                        <h4 className='text-[#262220] text-lg md:text-xl text-center font-medium font-della tracking-wide'>
                        Commercial 
                        Styling 
                        </h4>
                        <div className='font-raleway'>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            We will work with the concept of the Photoshoot sent by the brand, create a mood board that best interprets the vision of the client, select the perfect outfits, based on the shoot concept, models and brand colors, and be on set the day of the shoot to make sure everything goes off without a hitch. 
                            </p>
                            <div className='mt-4'>
                                <img src={commercial_img} alt="birthday" className='' />
                            </div>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            We will steam the dresses, handle any fashion emergencies
                            </p>
                        </div>
                    </div>
                    <div className='border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] py-6'>
                        <h4 className='text-[#262220] text-lg md:text-xl text-center  font-della tracking-wide'>
                                Virtual 
                            Styling & 
                            Personal 
                            Shopping 
                        </h4>
                        <div className='font-raleway'>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            As your virtual stylist/personal shopper, we select clothing and accessories that flatter the client, fit their budget and suit their tastes.
                            </p>
                            <div className='mt-4'>
                                <img src={virtual_img} alt="birthday" className='' />
                            </div>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            A virtual stylist means never meeting your client in person. Depending on the client's goals, we help design a professional wardrobe, pick out items for special occasions or help clients define and refine their personal look
                            </p>
                        </div>
                    </div>
                    <div className='py-6'>
                        <h4 className='text-[#262220] text-lg md:text-xl  text-center font-della tracking-wide'>
                        Fashion 
                        Consultation 
                        </h4>
                        <div className='font-raleway'>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            As your fashion consultants, we help with wardrobe improvements. 
                            </p>
                            <div className='mt-4'>
                                <img src={fashion_img} alt="birthday" className='' />
                            </div>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-3'>
                            We help our clients make clothing style choices appropriate to a variety of situations, including personal and business settings and often, make recommendations on accessories too.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='hidden md:block'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] font-della tracking-wide font-medium  text-lg md:text-2xl'>Bridal Styling</h6>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-4'>
                            As your bridal stylist, we will get started by creating a clear vision of how you want to look on your wedding day. Then we will help you zero in on wedding dress styles that flatter your figure, fit your venue, and schedule your appointments. We will also accompany you to each fitting so that you always have an expert available for support. We will source the perfect finishing touches and be present on your wedding day to make sure every detail is picture-perfect
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={bridal_img} alt="bridal" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={birthday_img} alt="birthday" className='w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] font-della tracking-wide font-medium  text-lg md:text-2xl'>Birthday & Maternity Styling </h6>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-4'>
                            We help you curate a mood board guide that best suits the theme of your birthday or maternity shoot. We also provide makeup artists and hairstylists that will also create looks that have been curated in the mood board to bring your vision to life. On the day of the shoot, we will be there to style the clothes to create a very detailed look
                            </p>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] font-della tracking-wide font-medium  text-lg md:text-2xl'>Commercial styling </h6>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-4'>
                            We will work with the concept of the Photoshoot sent by the brand, create a mood board that best interprets the vision of the client, select the perfect outfits, based on the shoot concept, models and brand colors, and be on-set the day of the shoot to make sure everything goes off without a hitch. We will steam the dresses, and handle any fashion emergencies
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={commercial_img} alt="commercial" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                <div className='flex h-[650px] overflow-hidden'>
                        <img src={virtual_img} alt="virtual" className='w-full object-cover' />
                    </div>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] font-della tracking-wide font-medium text-lg md:text-2xl'>Virtual styling and personal shopping</h6>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-4'>
                            As your virtual stylist/personal shopper, we select clothing and accessories that flatter the client, fit their budget and suit their tastes. A virtual stylist means never meeting your client in person. Depending on the client's goals, we help design a professional wardrobe, pick out items for special occasions or help clients define and refine their personal look
                            </p>
                        </div>
                    </div>
                   
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] font-della tracking-wide font-medium  text-lg md:text-2xl'>Fashion Consultation </h6>
                            <p className='text-[#000000] font-raleway tracking-wide text-sm md:text-sm mt-4'>
                            As your fashion consultants, we help with wardrobe improvements. We help our clients make clothing style choices appropriate to a variety of situations, including personal and business settings and often, make recommendations on accessories too.
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={fashion_img} alt="fashion" className='w-full object-cover' />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ServicesPage;