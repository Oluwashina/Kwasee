import React from 'react';
import { CSSTransition } from 'react-transition-group'
import close_icon from '../../assets/icons/close-white.svg'
import './modal.css'

const ModalComponent = ({showModal, show, children}) => {
    return ( 
        <>
         <CSSTransition
                in={show}
                unmountOnExit
                timeout={{ enter: 0, exit: 300 }}
         >
              <div className='modal 
                    overflow-y-auto overflow-x-hidden bg-[#000000]
                    bg-opacity-50 fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full
                    opacity-0 transition-all duration-[0.3s]'>
                 <div class="relative p-4 w-full max-w-lg h-full md:h-auto mx-auto my-4 md:my-10 modal-content translate-y-[-200px] transition-all duration-[0.3s]">
                     {/* modal content */}
                        <div class="relative bg-[#262220] py-5 px-5">

                       {/* modal header */}
                    <div class="flex justify-end">                       
                        <div className='cursor-pointer bg-[#fff] flex justify-center items-center w-[30px] h-[30px] rounded-full' onClick={showModal}>
                           <img src={close_icon} className="w-[20px] h-[20px]" alt="close" />
                        </div>
                    </div>

                    {/* modal body */}
                    <div>
                        {children}
                    </div>

                </div>
    
                         
                </div>
               </div>
            </CSSTransition>
        </>
     );
}
 
export default ModalComponent;