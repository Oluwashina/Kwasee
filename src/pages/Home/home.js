import React from 'react';
import pic1 from '../../assets/pic1.png'

const HomePage = () => {
    return ( 
        <>
            <div className='bg-[#262220] min-h-[500px] flex flex-col justify-center'>
                <div className='text-center'>
                    <h6 className='text-[#F7F1F0] font-semibold tracking-widest text-base'>KWASEE</h6>
                    <p className='text-[#F7F1F0] tracking-wide text-xs mt-1 max-w-xl mx-auto'>
                    We help you discover a signature style that suits your personality and body type.It is not whether or not you have style, is it expressed through your clothes? Use your style as a tool to stand out.
                    </p>
                </div>         
            </div>

            <div className='py-10'>
                <h6 className='text-[#262220] tracking-widest text-center font-medium text-2xl'>Packages</h6>
                <div className='grid grid-cols-4 gap-6 mt-8'>
                    <div className='bg-[#262220] h-[400px] relative'>

                        <div className='text-center absolute mx-auto left-0 right-0 bottom-20'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>VIRTUAL STYLING </h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-sm tracking-wide'>Closet Edit: $100</li>
                                <li className='text-[#F7F1F0] text-sm tracking-wide'>Image Consultation: $150</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] h-[400px] relative'>

                      <div className='text-center absolute mx-auto left-0 right-0 bottom-24'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>BIRTHDAY SHOOT </h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-sm tracking-wide'>$106/PER LOOK</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] h-[400px] relative'>
                        <div className='text-center absolute mx-auto left-0 right-0 bottom-24'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>MATERNITY SHOOT</h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-sm tracking-wide'>$106/PER LOOK</li>
                            </ul>
                        </div>

                    </div>
                    <div className='bg-[#262220] h-[400px] relative'>
                        <div className='text-center absolute mx-auto left-0 right-0 bottom-20'>
                            <h6 className='text-[#F7F1F0] font-medium tracking-wide'>ASSISTED PHYSICAL <br/> SHOPPING</h6>
                            <ul className='mt-2'>
                                <li className='text-[#F7F1F0] text-sm tracking-wide'>$250/Whole Day</li>
                            </ul>
                        </div>

                     </div>
                </div>

                <div className='mt-12'>
                   <h6 className='text-[#262220] tracking-widest text-center font-medium text-2xl'>Text</h6>
                   <div className='mt-8'>
                       <img src={pic1} alt="pic1" />
                   </div>
                </div>

                <div className='mt-12'>
                    <h6 className='text-[#262220] tracking-widest text-center font-medium text-2xl'>Our Services</h6>
                    <div className='mt-8 grid grid-cols-5 md:px-8 px-6'>
                        <div className='flex flex-col justify-center h-[500px] border-r border-[#C3A6A0] border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-center text-xl font-semibold tracking-wide'>Bridal Styling</h4>
                        </div>
                        <div className='flex flex-col justify-center h-[500px] border-r border-[#C3A6A0] border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-xl  text-center font-semibold tracking-wide'>
                            Birthday & 
                                Maternity 
                                Styling </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[500px] border-r border-[#C3A6A0] border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-xl text-center font-semibold tracking-wide'>
                            Commercial 
                            Styling </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[500px] border-r border-[#C3A6A0] border-opacity-[.5] px-4'>
                            <h4 className='text-[#262220] text-xl text-center  font-semibold tracking-wide'>
                                    Virtual 
                                Styling & 
                                Personal 
                                Shopping </h4>
                        </div>
                        <div className='flex flex-col justify-center h-[500px]'>
                            <h4 className='text-[#262220] text-xl  text-center font-semibold tracking-wide px-4'>
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