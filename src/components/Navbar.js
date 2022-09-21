import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link'
import logo from '../assets/icons/Kwasee_black.svg'
import menu from '../assets/icons/menu.svg'
import close_icon from '../assets/icons/close.svg'

const NavbarComponent = () => {

    const [navShow, setNavShow] = useState(false);
    const navigate = useNavigate()

    const toggleOpen = () =>{
        setNavShow(true)
    }

    const toggleClose = () =>{
        setNavShow(false)
    }

    const handleRoute = (val) =>{
     setNavShow(false)
     switch(val){
         case 'home':
             navigate('/')
             break;
         case 'services':
            navigate('/our-services')
             break;
        case 'gallery':
            navigate('/gallery')
            break;
        case 'about': 
          navigate('/about-us')
            break;
        case 'contact':
            navigate('/#footer')
            break;
        default:
            break;
     }

    }

   
    return ( 
        <>
         <div className='py-6 md:py-6 md:px-8 px-4'>
             <div className='text-center md:hidden'>
                 <p className='text-[#000000] font-medium tracking-wide md:tracking-widest text-xs md:text-sm'>Becoming the best version of yourself, one outfit at a time</p>
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
                    <Link to="/#footer" className="text-[#262220] text-sm tracking-widest">Contact Us</Link>
                </li>
             </ul>

             <div className='text-center mt-4 hidden md:block'>
                 <p className='text-[#000000] font-medium tracking-wide md:tracking-widest text-xs md:text-sm'>Becoming the best version of yourself, one outfit at a time</p>
             </div>

             {/* mobile nav */}
             <div className={navShow ? 'hidden' : 'md:hidden flex items-center justify-between mt-6'}>
                 <div>
                   <Link to="/" className="text-[#262220] text-sm tracking-widest">
                        <img src={logo} className="w-[120px]" alt="logo" />    
                    </Link>
                 </div>
                 <div onClick={toggleOpen} className='cursor-pointer'>
                    <img src={menu} alt="menu" className='w-[25px] h-[25px]' />
                 </div>
             </div>

             {/* mobile menu */}
             <div className={navShow ? 'md:hidden bg-[#D5D5D5] w-full h-full top-0 left-0 z-20 fixed overflow-hidden': 'hidden'}>
                 <div onClick={toggleClose} className='cursor-pointer absolute right-6 top-6 bg-[#262220] flex justify-center items-center w-[40px] h-[40px] rounded-full'>
                     <img src={close_icon} alt="close" />
                 </div>
                 <ul className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                 <li className='text-center mb-8'>
                        <p onClick={() => handleRoute('home')} className='text-[#262220] font-semibold tracking-wide text-2xl'>Home</p>
                     </li>
                      <li className='text-center mb-8'>
                        <p onClick={() => handleRoute('services')} className='text-[#262220] font-semibold tracking-wide text-2xl'>Our Services</p>
                     </li>
                     <li className='text-center mb-8'>
                         <p onClick={() => handleRoute('gallery')} className='text-[#262220] font-semibold tracking-wide text-2xl text-center'>Gallery</p>
                     </li>
                     <li className='text-center mb-8'>
                         <p onClick={() => handleRoute('about')} className='text-[#262220] font-semibold tracking-wide text-2xl text-center'>About Us</p>
                     </li>
                     <li className='text-center'>
                         <a href="mailto:kwasee.official@gmail.com"  className='text-[#262220] font-semibold tracking-wide text-2xl text-center'>Contact Us</a>
                     </li>
                 </ul>
             </div>


         </div>
        </>
     );
}
 
export default NavbarComponent;