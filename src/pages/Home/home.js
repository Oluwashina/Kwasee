import React,{useEffect, useState} from 'react';
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic_2.png'
import pic4 from '../../assets/pic_3.png'
import pic5 from '../../assets/pic_4.png'
import pic6 from '../../assets/pic_5.png'
import logo from '../../assets/icons/Kwasee_white.svg'
import Modal from '../../components/Modals/modal'
import axios from 'axios'
import pic3 from '../../assets/icons/pic3.svg'
import hero from '../../assets/hero.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const HomePage = () => {

      const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        initialSlide: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        easing: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const [show, setShow] = useState(false)

    const [fullname, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    const showModal = () =>{
        setShow(!show)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsBtnDisabled(true)
        axios.post('https://sheet.best/api/sheets/de4913d8-2e9f-4aa2-a6b8-6acb1d42824c', {
            fullname: fullname,
            email: email
        })
        .then(response => {
            console.log(response)
            setIsBtnDisabled(false)
            setShow(!show)
            alert('Thank you for joining the family!')
        })

    }

    useEffect(()=>{
        setTimeout(() => {
            setShow(true)
        }, 3000);
    },[])



    return ( 
        <>
            <Modal show={show} showModal={showModal}>
                <div className='py-8 px-4 md:px-6'>

                    <div className='bg-white w-full'>
                        <img src={pic3} alt="join us" className='w-full' />
                    </div>
                    <div className='text-center mt-6'>
                        <h6 className='text-[#F7F1F0] tracking-wide font-semibold text-xl'>JOIN OUR FASHION FAM</h6>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <div>
                          <input type="text" 
                          value={fullname}
                          onChange={(e) => setFullName(e.target.value)} 
                          className="block py-4 px-4 w-full text-[#262220] bg-[#F7F1F0] rounded-[4px] appearance-none text-sm outline-none" placeholder="Full Name" required />
                        </div>
                        <div className='mt-3'>
                          <input type="email"  
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          className="block py-4 px-4 w-full text-[#262220] bg-[#F7F1F0] rounded-[4px] appearance-none text-sm outline-none" placeholder="Email Address" required />
                        </div>
                        <div className='mt-6'>
                            <button type="submit" disabled={isBtnDisabled} className="w-full disabled:bg-[#725C5C] disabled:opacity-50  text-[#F7F1F0] bg-[#725C5C] rounded-[4px] tracking-wide focus:outline-none font-semibold text-base px-6 py-4">SUBSCRIBE</button>
                        </div>
                   </form>

                </div>
                
            </Modal>

            <div className='bg-[#262220] h[400px] md:h-[800px] flex overflow-hidden relative'>
                <div>
                    <img src={hero} alt="hero" />
                </div>            
                <div className='text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='flex justify-center'>
                         <img src={logo} alt="logo" />
                    </div>
                    <p className='text-[#F7F1F0] tracking-wide leading-5 text-xs md:text-sm mt-1 md:mt-2 max-w-md md:max-w-xl mx-auto'>
                    We help you discover a signature style that suits your personality and body type. It is not whether or not you have style, is it expressed through your clothes? Use your style as a tool to stand out.
                    </p>
                </div>         
            </div>

            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest text-center italic font-medium text-xl md:text-2xl'>Packages</h6>
                <div className='grid grid-cols-4 gap-56 md:gap-6 mt-8 px-4 md:px-0 overflow-scroll'>
                    <Link to="/virtual-styling" className='bg-virtual_small bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px] md:h-[400px] rounded-lg md:rounded-none relative'>

                        <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-14 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] text-base md:text-base font-medium tracking-wide'>VIRTUAL STYLING </h6>
                        </div>

                    </Link>

                    <Link to="/birthday-shoot" className='bg-birthday_small bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px] md:h-[400px] relative rounded-lg md:rounded-none'>
                      <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-14 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] text-base md:text-base font-medium tracking-wide'>BIRTHDAY SHOOT </h6>
                        </div>

                    </Link>

                    <Link to="/maternity-shoot" className='bg-maternity_small bg-cover bg-center] w-[200px] cursor-pointer md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] text-base md:text-base font-medium tracking-wide'>MATERNITY SHOOT</h6>
                        </div>
                    </Link>

                    <Link to="/personal-shopping" className='bg-shopping bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center px-6 md:px-0 absolute mx-auto left-0 right-0 bottom-10 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] text-base md:text-base font-medium tracking-wide'>ASSISTED PHYSICAL <br/> SHOPPING</h6>
                        </div>
                     </Link>

                </div>

                <div className='mt-10 md:mt-12'>
                   {/* <h6 className='text-[#262220] tracking-widest text-center font-medium text-xl md:text-2xl'>Text</h6> */}
                   <Slider className='mt-8' {...settings}>
                       <div>
                           <img src={pic1} alt="pic1" className='' />
                       </div>
                       <div>
                           <img src={pic2} alt="pic2" className='' />
                       </div>
                       <div>
                           <img src={pic4} alt="pic4" className='' />
                       </div>
                       <div>
                           <img src={pic5} alt="pic5" className='' />
                       </div>
                       <div>
                           <img src={pic6} alt="pic6" className='' />
                       </div>
                    </Slider>
                </div>

                <div className='mt-10 md:mt-12'>
                    <h6 className='text-[#262220] italic tracking-[0.03em] text-center font-medium text-xl md:text-2xl'>Our Services</h6>
                    <div className='mt-8 grid md:grid-cols-5 md:px-8 px-4'>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-center text-lg md:text-xl font-semibold tracking-wide'>Bridal Styling</h4>
                        </div>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0  md:border-r md:border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-lg md:text-xl  text-center font-semibold tracking-wide'>
                            Birthday & 
                                Maternity 
                                Styling </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0  md:border-r md:border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-lg md:text-xl text-center font-semibold tracking-wide'>
                            Commercial 
                            Styling </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0  md:border-r md:border-[#C3A6A0] border-opacity-[.5] md:border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-lg md:text-xl text-center  font-semibold tracking-wide'>
                                    Virtual 
                                Styling & 
                                Personal 
                                Shopping </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px]'>
                            <h4 className='text-[#262220] text-lg md:text-xl text-center font-semibold tracking-wide px-4'>
                            Fashion 
                            Consultation </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;