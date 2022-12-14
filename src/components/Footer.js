import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/Kwasee_logoW.svg'


const FooterComponent = () => {

    const [email, setEmail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return ( 
        <>
        <div id="footer" className='bg-[#262220] py-8 md:px-8 px-4 font-raleway'>
           
           <div className='grid md:grid-cols-3 gap-8 md:gap-0 py-10 md:py-20'>
               <div className='flex flex-col justify-center'>
                   <Link to="/">
                      <img src={logo} alt="logo" className="w-[150px]" />
                   </Link>
               </div>
               <div>
                 <div>
                    <h6 className="text-[#F7F1F0] font-raleway  opacity-[.5] md:opacity-[1] font-semibold tracking-wide">CONTACT US</h6>
                        <ul className="mt-1 md:mt-2">
                            <li>
                                <a href="mailto:kwasee.official@gmail.com" className="text-[#F7F1F0] text-sm tracking-wide">kwasee.official@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:+2349012324754" className="text-[#F7F1F0] text-sm tracking-wide">+2349012324754</a>
                            </li>
                        </ul>
                  </div>
                  <div className='mt-8'>
                    <h6 className="text-[#F7F1F0] font-raleway  opacity-[.5] md:opacity-[1] font-semibold tracking-wide">LINKS</h6>
                        <ul className="mt-1 md:mt-2">
                            <li>
                                <Link to="/" className="text-[#F7F1F0] text-sm tracking-wide">Our blog</Link>
                            </li>
                            <li className='md:mt-1'>
                                <a href="tel:+2349012324754" className="text-[#F7F1F0] text-sm tracking-wide">Contact</a>
                            </li>
                        </ul>
                  </div>
                  <div className='mt-8'>
                    <h6 className="text-[#F7F1F0] font-raleway opacity-[.5] md:opacity-[1] font-semibold tracking-wide">SOCIAL MEDIA</h6>
                        <ul className="mt-1 md:mt-2">
                            <li className='mt-1'>
                                <a href="https://www.facebook.com/Kwasee.official" target="_blank" rel='noreferrer' className="text-[#F7F1F0] text-sm tracking-wide">Facebook</a>
                            </li>
                            <li className='mt-1'>
                                <a href="https://www.instagram.com/kwasee.official/" target="_blank" rel='noreferrer' className="text-[#F7F1F0] text-sm tracking-wide">Instagram</a>
                            </li>
                            <li className='mt-1'>
                                <a href="https://twitter.com/kwaseestyle?s=11&t=IvllmuckER8fN-DqE_T6GQ" target="_blank" rel='noreferrer' className="text-[#F7F1F0] text-sm tracking-wide">Twitter</a>
                            </li>
                        </ul>
                  </div>
               </div>
               <div>
                    <div>
                        <h6 className='text-[#F7F1F0] font-raleway opacity-[.5] md:opacity-[1] font-medium tracking-wide '>NEWSLETTER</h6>
                        <p className='text-[#F7F1F0] tracking-wide text-sm mt-4'>
                        Subscribe to get updates on our daily services
                        </p>
                        <form onSubmit={handleSubmit} className='relative mt-2'>
                          <input type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          className="block py-4 px-4 w-full text-[#262220] bg-white appearance-none text-sm outline-none" placeholder="email@newsletter.com" required />
                          <button type="submit" className="text-[#262220] absolute right-0 top-0 h-full bg-[#F7F1F0] tracking-wide focus:outline-none font-semibold text-base px-6 py-2">JOIN</button>
                        </form>
                    </div>
               </div>
           </div>

           <div className='text-center'>
                <p className='text-[#F7F1F0] font-semibold tracking-wide text-xs'>Copyright &copy; {new Date().getFullYear()} All rights reserved. KWASEE</p>
           </div>


        </div>
        </>
     );
}
 
export default FooterComponent;