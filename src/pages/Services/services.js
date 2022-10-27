import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    return ( 
        <>
            <div className='pt-10 md:pb-0 pb-10'>
                <h6 className='text-[#262220] tracking-widest font-della text-center font-medium text-2xl'>Our Services</h6>
               
                <div className='mt-4 md:mt-8 grid grid-cols-5 gap-56 md:gap-0 mt-8 px-4 md:px-0 overflow-scroll'>
                    <Link to="/bridal-style" className='group bg-service2 bg-cover bg-center bg-no-repeat w-[200px] cursor-pointer md:w-full h-[400px] md:h-[677px] rounded-lg md:rounded-none relative'>
                        <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-14'>
                            <h6 className='text-[#F7F1F0] text-2xl md:text-3xl font-della font-medium'>Bridal <br/> Styling </h6>
                        </div>
                        <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 md:rounded-none rounded-lg md:group-hover:opacity-[.3]"></div>
                    </Link>

                    <Link to="/birthday-style" className='group bg-service1 bg-cover bg-center bg-no-repeat w-[200px] cursor-pointer md:w-auto h-[400px] md:h-[677px] relative rounded-lg md:rounded-none'>
                        <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 md:rounded-none rounded-lg md:group-hover:opacity-[.3]"></div>
                    </Link>

                    <Link to="/commercial-style" className='group bg-service3 w-[200px] bg-cover bg-center bg-no-repeat  cursor-pointer md:w-auto h-[400px] md:h-[677px] relative rounded-lg md:rounded-none'>
                        <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-20'>
                            <h6 className='text-[#F7F1F0] text-2xl md:text-3xl font-della font-medium'>Commercial <br/> Styling </h6>
                        </div>
                        <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 md:rounded-none rounded-lg md:group-hover:opacity-[.3]"></div>
                    </Link>

                    <Link to="/virtual-style" className='group bg-service4 bg-cover bg-no-repeat bg-center  w-[200px] cursor-pointer md:w-auto h-[400px]  md:h-[677px] relative rounded-lg md:rounded-none'>
                        
                        <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 md:rounded-none rounded-lg md:group-hover:opacity-[.3]"></div>
                     </Link>

                     <Link to="/fashion-consult" className='group bg-service5 bg-cover bg-center bg-no-repeat  w-[200px] cursor-pointer md:w-auto h-[400px]  md:h-[677px] relative rounded-lg md:rounded-none'>
                         <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-14'>
                            <h6 className='text-[#F7F1F0] text-2xl md:text-3xl font-della font-medium'>Fashion <br/> Consultation </h6>
                        </div>
                        <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 md:rounded-none rounded-lg md:group-hover:opacity-[.3]"></div>
                     </Link>
                    </div>
            </div>
        </>
     );
}
 
export default ServicesPage;