import React from 'react';
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Content from '../Components/Content';

export default function Layout() {
    return (
        <>  
        {/* This section is the header section */}
        <div>
           <Header />
        </div>
        {/* This is the Menu section  */}
        <div>
            <Menu />
        </div>
        <div>
            <Content />
        </div>

        <div>
            <Footer />
        </div>     
        </>
    )
}
