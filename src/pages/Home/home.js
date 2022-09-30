import React,{useEffect, useState} from 'react';
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic_2.png'
import pic4 from '../../assets/pic_3.png'
import pic5 from '../../assets/pic_4.png'
import pic6 from '../../assets/pic_5.png'
import Modal from '../../components/Modals/modal'
import axios from 'axios'
import pic3 from '../../assets/icons/sho.svg'
import hero from '../../assets/hero.svg'
import hero1 from '../../assets/hero1.svg'
import hero2 from '../../assets/hero2.svg'
import service1 from '../../assets/T.svg'
import service2 from '../../assets/S.svg'
import service3 from '../../assets/Y.svg'
import service4 from '../../assets/L.svg'
import service5 from '../../assets/E.svg'
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

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [isBtnDisabled, setIsBtnDisabled] = useState(false)

    const showModal = () =>{
        setShow(!show)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsBtnDisabled(true)
        axios.post('https://sheet.best/api/sheets/de4913d8-2e9f-4aa2-a6b8-6acb1d42824c', {
            fullname: firstname + ' ' + lastname ,
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
                        <h6 className='text-[#F7F1F0] font-della tracking-wide font-semibold text-xl'>JOIN OUR FASHION FAM</h6>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-5'>
                        <div>
                          <input type="text" 
                          value={firstname}
                          onChange={(e) => setFirstName(e.target.value)} 
                          className="block py-4 px-4 w-full text-[#262220] bg-[#F7F1F0] rounded-[4px] appearance-none text-sm outline-none" placeholder="First Name" required />
                        </div>
                        <div className='mt-3'>
                          <input type="text" 
                          value={lastname}
                          onChange={(e) => setLastName(e.target.value)} 
                          className="block py-4 px-4 w-full text-[#262220] bg-[#F7F1F0] rounded-[4px] appearance-none text-sm outline-none" placeholder="Last Name" required />
                        </div>
                        <div className='mt-3'>
                          <input type="email"  
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} 
                          className="block py-4 px-4 w-full text-[#262220] bg-[#F7F1F0] rounded-[4px] appearance-none text-sm outline-none" placeholder="Email" required />
                        </div>
                        <div className='mt-6'>
                            <button type="submit" disabled={isBtnDisabled} className="w-full disabled:bg-[#725C5C] disabled:opacity-50 font-della font-medium  text-[#F7F1F0] bg-[#725C5C] rounded-[4px] tracking-wide focus:outline-none font-semibold text-base px-6 py-4">SUBSCRIBE</button>
                        </div>
                   </form>

                </div>
                
            </Modal>

            <Slider  {...settings}>
                <div className='bg-[#262220] h[400px] md:h-[800px] flex overflow-hidden relative'>
                    <div>
                        <img src={hero} alt="hero" />
                    </div>
                    <div className='absolute bottom-10 md:bottom-20 left-4 md:left-10'>
                        <h5 className='font-della text-[#F7F1F0] md:text-4xl text-xl md:tracking-widest font-medium md:max-w-sm md:mx-auto md:text-center'> Discover a <br/> signature style </h5>  
                        <p className='lowercase text-[#F7F1F0] font-raleway font-medium text-xs md:text-sm mt-2 md:mt-4'>that suits your personality and body type.</p>  
                    </div>                   
                   </div>
                        <div className='bg-[#262220] h[400px] md:h-[800px] flex overflow-hidden relative'>
                        <div>
                            <img src={hero1} alt="hero" />
                        </div>
                        <div className='absolute bottom-10 md:bottom-20 right-6 md:right-20'>
                            <h5 className='font-della text-[#F7F1F0] md:text-4xl text-xl md:tracking-widest font-medium max-w-sm mx-auto text-right md:text-center'>  It is not whether or <br/> not you have style, </h5>  
                            <p className='lowercase text-[#F7F1F0] font-raleway font-medium text-xs md:text-sm mt-2 md:mt-4'>is it expressed through your clothes? </p>  
                        </div>                   
                    </div>
                    <div className='bg-[#262220] h[400px] md:h-[800px] flex overflow-hidden relative'>
                        <div>
                            <img src={hero2} alt="hero" />
                        </div>
                        <div className='absolute bottom-10 md:bottom-1/2 left-1/2'>
                            <h5 className='font-della text-[#F7F1F0] md:text-4xl  text-xl tracking-widest font-medium max-w-sm mx-auto'> Use <br/> Your Style <br/> As A Tool </h5>  
                            <p className='lowercase text-[#F7F1F0] font-raleway font-medium text-xs md:text-sm mt-2 md:mt-4'>to stand out</p>  
                        </div>                   
                    </div>
                </Slider>
          
          

            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest text-center font-della font-medium text-xl md:text-2xl'>Packages</h6>
                <div className='grid grid-cols-4 gap-56 md:gap-6 mt-8 px-4 md:px-8 overflow-scroll'>
                    <Link to="/virtual-styling" className='bg-virtual_small bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px] md:h-[400px] rounded-lg md:rounded-none relative'>

                        <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-14 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] text-base md:text-base font-della font-medium tracking-wide'>VIRTUAL STYLING </h6>
                        </div>

                    </Link>

                    <Link to="/birthday-shoot" className='bg-birthday_small bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px] md:h-[400px] relative rounded-lg md:rounded-none'>
                      <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-14 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] font-della text-base md:text-base font-medium tracking-wide'>BIRTHDAY SHOOT </h6>
                        </div>

                    </Link>

                    <Link to="/maternity-shoot" className='bg-maternity_small bg-cover bg-center] w-[200px] cursor-pointer md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] font-della text-base md:text-base font-medium tracking-wide'>MATERNITY SHOOT</h6>
                        </div>
                    </Link>

                    <Link to="/personal-shopping" className='bg-shopping bg-cover bg-center w-[200px] cursor-pointer md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center px-6 md:px-0 absolute mx-auto left-0 right-0 bottom-10 md:bottom-10'>
                            <h6 className='text-[#F7F1F0] font-della text-base md:text-base font-medium tracking-wide'>ASSISTED PHYSICAL <br/> SHOPPING</h6>
                        </div>
                     </Link>

                </div>

                <div className='mt-10 md:mt-12 md:px-8 px-0'>
                    <h6 className='text-[#262220] tracking-widest text-center font-della font-medium text-xl md:text-2xl'>Testimonials</h6>

                    <Slider  {...settings}>
                        <div className='mt-4 bg-[#725C5C] px-4'>
                            <div className='flex flex-col items-center justify-center md:h-[400px] h-[300px]'>
                                <div className='max-w-md mx-auto text-center'>
                                    <h6 className='font-raleway text-[#F7F1F0] text-sm font-normal md:text-base italic tracking-wide'>
                                        “I love you. I love you. I don't think I could thank you enough. What you did is way past the money or anything. I realise now that I wouldn't have had these memories if I didn't have you”
                                    </h6>
                                    <p className='font-della mt-3 text-[#F7F1F0] font-medium tracking-wide'>Opeyemi</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className='mt-4 bg-[#725C5C] px-4'>
                            <div className='flex flex-col items-center justify-center md:h-[400px] h-[300px]'>
                                <div className='max-w-md mx-auto text-center'>
                                    <h6 className='font-raleway text-[#F7F1F0] text-sm font-normal md:text-base italic tracking-wide'>
                                    “All my looks were a hit back to back. Thank you so much for all you did for this wedding. You're not just my stylist, you're my friend now. I owe you, Jumoke”
                                    </h6>
                                    <p className='font-della mt-3 text-[#F7F1F0] font-medium tracking-wide'>Tola</p>
                                </div>
                                </div>
                            </div>
                   </Slider>
                   
                </div>

                <div className='mt-10 md:mt-12'>
                  {/* <video controls width="100%">
                    <source src={src} type="video/*" />
                    Sorry, your browser doesn't support embedded videos.
                    </video> */}

                <div className=''>
                    <iframe width="100%" 
                    height="800" src="https://www.youtube.com/embed/PO_5uiap9Cg" 
                    title="Commercial Styling" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>

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
                    <h6 className='text-[#262220] font-della tracking-[0.03em] text-center font-medium text-xl md:text-2xl'>Our Services</h6>

                    <div className='mt-4 md:mt-8 grid grid-cols-5'>
                        <Link to="/our-services">
                            <img src={service1} alt="service1" />
                        </Link>
                        <Link to="/our-services">
                            <img src={service2} alt="service2" />
                        </Link>
                        <Link to="/our-services">
                            <img src={service3} alt="service3" />
                        </Link>
                        <Link to="/our-services">
                            <img src={service4} alt="service4" />
                        </Link>
                        <Link to="/our-services">
                            <img src={service5} alt="service5" />
                        </Link>

                    </div>
                </div>
            </div>
        </>
     );
}
 
export default HomePage;