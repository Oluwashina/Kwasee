import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

const NavbarComponent = () => {
    return ( 
        <>
         <div className='py-4 md:px-8 px-6'>
             <div className='text-center'>
                 <p className='text-[#000000] font-medium tracking-widest text-sm'>Becoming the best version of yourself, one outfit at a time</p>
             </div>

             {/* desktop nav menu */}
             <ul className='md:flex hidden justify-between items-center mt-8'>
                <li>
                    <Link to="/our-services" className="text-[#262220] text-sm tracking-widest">Our Services</Link>
                </li>
                <li>
                    <Link to="/gallery" className="text-[#262220] text-sm tracking-widest">Gallery</Link>
                </li>
                <li>
                    <Link to="/" className="text-[#262220] text-sm tracking-widest">
                        <img src={logo} className="w-[150px]" alt="logo" />    
                    </Link>
                </li>
                <li>
                    <Link to="/about-us" className="text-[#262220] text-sm tracking-widest">About Us</Link>
                </li>
                <li>
                    <Link to="/" className="text-[#262220] text-sm tracking-widest">Contact Us</Link>
                </li>
             </ul>

         </div>
        </>
     );
}
 
export default NavbarComponent;