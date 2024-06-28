import { Outlet } from "react-router-dom";

import Navbar from '../Components/Navbar.jsx';

const Layout = () => {

    return(
        <>

        <Navbar/>

        <Outlet />

        <footer className="flex justify-center p-4 bg-gray-100 border-gray-300">
            Copyright © React Foundation
        </footer>
        
        
        </>
    )


}

export default Layout;


//  <header className="flex items-center pb-4">
// <h1 className="text-3xl">React Foundation</h1>

// <Navbar />

// </header> 