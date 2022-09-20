import React from 'react';

const ServicesPage = () => {
    return ( 
        <>
            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest text-center font-medium text-2xl'>Our Services</h6>
                <div className='mt-8 grid md:grid-cols-5 md:px-8 px-4'>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0 border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-center text-lg md:text-xl font-semibold tracking-wide'>Bridal Styling</h4>
                    </div>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0 border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-lg md:text-xl  text-center font-semibold tracking-wide'>
                        Birthday & 
                            Maternity 
                            Styling </h4>
                    </div>
                    <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0 border-opacity-[.5] md:border-opacity-[.5] px-4'>
                        <h4 className='text-[#262220] text-lg md:text-xl text-center font-semibold tracking-wide'>
                        Commercial 
                        Styling </h4>
                    </div>
                    <div className='flex flex-col justify-center  h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0 border-opacity-[.5] md:border-opacity-[.5] px-4'>
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
        </>
     );
}
 
export default ServicesPage;