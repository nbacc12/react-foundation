/* Layout for common pages */

import { Outlet } from "react-router-dom";

import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx'

const Layout = () => {

    return(
        <>

        <Navbar/>

        <Outlet />

        <Footer />
              
        </>
    )


}

export default Layout;


//  <header className="flex items-center pb-4">
// <h1 className="text-3xl">React Foundation</h1>

// <Navbar />

// </header> 