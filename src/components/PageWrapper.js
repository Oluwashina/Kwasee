import React from 'react';
import FooterComponent from './Footer';
import NavbarComponent from './Navbar';


const PageWrapper = ({children}) => {
    return (  
        <>
            <NavbarComponent/>
                {children}
            <FooterComponent/>
        </>
    );
}
 
export default PageWrapper;