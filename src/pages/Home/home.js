import React,{useEffect, useState} from 'react';
import pic1 from '../../assets/pic1.png'
import Modal from '../../components/Modals/modal'
import axios from 'axios'


const HomePage = () => {

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
            alert('Request received succesfully!')
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
                <div className='py-8 px-4 m:px-6'>

                    <div className='bg-white w-full h-[300px]'>
                    </div>
                    <div className='text-center mt-6'>
                        <h6 className='text-[#F7F1F0] tracking-wide font-semibold text-xl'>JOIN OUR FASHION NETWORK</h6>
                        <p className='text-[#F7F1F0] tracking-wide mt-1 text-sm'>Receive newsletters on fashion trends</p>
                    </div>

                    <form onSubmit={handleSubmit} className='mt-4'>
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

            <div className='bg-[#262220] min-h-[300px] md:min-h-[500px] flex flex-col justify-center'>
                <div className='text-center'>
                    <h6 className='text-[#F7F1F0] font-semibold tracking-widest text-base'>KWASEE</h6>
                    <p className='text-[#F7F1F0] tracking-wide leading-5 text-xs mt-1 max-w-xs md:max-w-xl mx-auto'>
                    We help you discover a signature style that suits your personality and body type.It is not whether or not you have style, is it expressed through your clothes? Use your style as a tool to stand out.
                    </p>
                </div>         
            </div>

            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest text-center font-medium text-xl md:text-2xl'>Packages</h6>
                <div className='grid grid-cols-4 gap-56 md:gap-6 mt-8 px-4 md:px-0 overflow-scroll'>
                    <div className='bg-[#262220] w-[200px] md:w-auto h-[250px] md:h-[400px] rounded-lg md:rounded-none relative'>

                        <div className='text-center absolute  px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-20'>
                            <h6 className='text-[#F7F1F0] text-sm md:text-base font-medium tracking-wide'>VIRTUAL STYLING </h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-xs md:text-sm tracking-wide'>Closet Edit: $100</li>
                                <li className='text-[#F7F1F0] text-xs md:text-sm tracking-wide'>Image Consultation: $150</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] w-[200px] md:w-auto h-[250px] md:h-[400px] relative rounded-lg md:rounded-none'>

                      <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-20'>
                            <h6 className='text-[#F7F1F0] text-sm md:text-base font-medium tracking-wide'>BIRTHDAY SHOOT </h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-xs md:text-sm tracking-wide'>$106/PER LOOK</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] w-[200px] md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center absolute px-6 md:px-0 mx-auto left-0 right-0 bottom-10 md:bottom-20'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>MATERNITY SHOOT</h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-xs md:text-sm tracking-wide'>$106/PER LOOK</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] w-[200px] md:w-auto h-[250px]  md:h-[400px] relative rounded-lg md:rounded-none'>
                        <div className='text-center px-6 md:px-0 absolute mx-auto left-0 right-0 bottom-10 md:bottom-20'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>ASSISTED PHYSICAL <br/> SHOPPING</h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-xs md:text-sm tracking-wide'>$250/Whole Day</li>
                            </ul>
                        </div>

                     </div>
                </div>

                <div className='mt-10 md:mt-12'>
                   <h6 className='text-[#262220] tracking-widest text-center font-medium text-xl md:text-2xl'>Text</h6>
                   <div className='mt-8'>
                       <img src={pic1} alt="pic1" className='' />
                   </div>
                </div>

                <div className='mt-10 md:mt-12'>
                    <h6 className='text-[#262220] tracking-widest text-center font-medium text-xl md:text-2xl'>Our Services</h6>
                    <div className='mt-8 grid md:grid-cols-5 md:px-8 px-4'>
                        <div className='flex flex-col justify-center h-[100px] md:h-[500px] border-b md:border-b-0 md:border-r border-[#C3A6A0 border-opacity-[.5] md:border-opacity-[.5] px-4'>
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