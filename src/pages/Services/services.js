import React from 'react';
import bridal_img from '../../assets/bridal_style.svg'
import birthday_img from '../../assets/birthday_style.svg'
import commercial_img from '../../assets/commercial_style.svg'
import fashion_img from '../../assets/fashion_style.svg'
import virtual_img from '../../assets/virtual_style.svg'

const ServicesPage = () => {
    return ( 
        <>
            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest italic text-center font-medium text-2xl'>Our Services</h6>
               
                <div className='mt-8 grid md:grid-cols-5 md:px-8 px-4 md:hidden'>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-center text-lg md:text-xl font-semibold tracking-wide'>Bridal Styling</h4>
                    </div>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-lg md:text-xl  text-center font-semibold tracking-wide'>
                        Birthday & 
                            Maternity 
                            Styling </h4>
                    </div>
                    <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-lg md:text-xl text-center font-semibold tracking-wide'>
                        Commercial 
                        Styling </h4>
                    </div>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-lg md:text-xl text-center  font-semibold tracking-wide'>
                                Virtual 
                            Styling & 
                            Personal 
                            Shopping </h4>
                    </div>
                    <div className='flex flex-col justify-center h-[100px] md:h-[500px]'>
                        <h4 className='text-[#262220] text-lg md:text-xl  text-center font-semibold tracking-wide px-4'>
                        Fashion 
                        Consultation </h4>
                    </div>
                </div>
            </div>

            <div className='hidden md:block'>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] tracking-wide font-semibold text-lg md:text-2xl'>Bridal Styling</h6>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-4'>
                            As your bridal stylist, we will get started by creating a clear vision of how you want to look on your wedding day. Then we will help you zero in on wedding dress styles that flatter your figure, fit your venue, and schedule your appointments. We will also accompany you to each fitting so that you always have an expert available for support. We will source the perfect finishing touches and be present on your wedding day to make sure every detail is picture-perfect
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={bridal_img} alt="bridal" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] tracking-wide font-semibold text-lg md:text-2xl'>Birthday & Maternity Styling </h6>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-4'>
                            We help you curate a mood board guide that best suits the theme of your birthday or maternity shoot. We also provide makeup artists and hairstylists that will also create looks that have been curated in the mood board to bring your vision to life. On the day of the shoot, we will be there to style the clothes to create a very detailed look
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={birthday_img} alt="birthday" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] tracking-wide font-semibold text-lg md:text-2xl'>Commercial styling </h6>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-4'>
                            We will work with the concept of the Photoshoot sent by the brand, create a mood board that best interprets the vision of the client, select the perfect outfits, based on the shoot concept, models and brand colors, and be on-set the day of the shoot to make sure everything goes off without a hitch. We will steam the dresses, and handle any fashion emergencies
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={commercial_img} alt="commercial" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] tracking-wide font-semibold text-lg md:text-2xl'>Virtual styling and personal shopping</h6>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-4'>
                            As your virtual stylist/personal shopper, we select clothing and accessories that flatter the client, fit their budget and suit their tastes. A virtual stylist means never meeting your client in person. Depending on the client's goals, we help design a professional wardrobe, pick out items for special occasions or help clients define and refine their personal look
                            </p>
                        </div>
                    </div>
                    <div className='flex h-[650px] overflow-hidden'>
                        <img src={virtual_img} alt="virtual" className='w-full object-cover' />
                    </div>
                </div>

                <div className='grid grid-cols-2 pt-8'>
                    <div className='flex flex-col justify-center md:px-8 px-4'>
                        <div className="max-w-md">
                            <h6 className='text-[#262220] tracking-wide font-semibold text-lg md:text-2xl'>Fashion Consultation </h6>
                            <p className='text-[#000000] tracking-wide text-sm md:text-sm mt-4'>
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