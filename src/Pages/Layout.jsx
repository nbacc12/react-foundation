import { Outlet } from "react-router";

const Layout = () => {

    return(
        <>

        <header class="flex items-center pb-4">
            <h1 class="text-3xl">React Foundation</h1>
        </header>

        <Outlet />

        <footer class="flex justify-center p-4">
            Copyright © React Foundation
        </footer>
        
        
        </>
    )


}

export default Layout;