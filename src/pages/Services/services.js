import React from 'react';
import service1 from '../../assets/T.svg'
import service2 from '../../assets/S.svg'
import service3 from '../../assets/Y.svg'
import service4 from '../../assets/L.svg'
import service5 from '../../assets/E.svg'
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    return ( 
        <>
            <div className='pt-10'>
                <h6 className='text-[#262220] tracking-widest font-della text-center font-medium text-2xl'>Our Services</h6>
               
                <div className='mt-4 md:mt-8 grid grid-cols-5'>
                        <Link to="/bridal-style" className='relative group'>
                            <img src={service1} alt="service1" />
                            <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 group-hover:opacity-[.2]"></div>
                        </Link>
                        <Link to="/birthday-style" className='relative group'>
                            <img src={service2} alt="service2" />
                            <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 group-hover:opacity-[.2]"></div>
                        </Link>
                        <Link to="/commercial-style" className='relative group'>
                            <img src={service3} alt="service3" />
                            <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 group-hover:opacity-[.2]"></div>
                        </Link>
                        <Link to="/virtual-style" className='relative group'>
                            <img src={service4} alt="service4" />
                            <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 group-hover:opacity-[.2]"></div>
                        </Link>
                        <Link to="/fashion-consult" className='relative group'>
                            <img src={service5} alt="service5" />
                            <div class="absolute inset-0 w-full h-full transition-all bg-[#000] opacity-0 group-hover:opacity-[.2]"></div>
                        </Link>

                 </div>
            </div>
        </>
     );
}
 
export default ServicesPage;