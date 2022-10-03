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
                        <Link to="/bridal-style">
                            <img src={service1} alt="service1" />
                        </Link>
                        <Link to="/birthday-style">
                            <img src={service2} alt="service2" />
                        </Link>
                        <Link to="/commercial-style">
                            <img src={service3} alt="service3" />
                        </Link>
                        <Link to="/virtual-style">
                            <img src={service4} alt="service4" />
                        </Link>
                        <Link to="/fashion-consult">
                            <img src={service5} alt="service5" />
                        </Link>

                    </div>
            </div>
        </>
     );
}
 
export default ServicesPage;