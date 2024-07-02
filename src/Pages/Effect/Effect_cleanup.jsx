//useEffect - Perform cleanup to reduce memory leak

import { useState, useEffect } from "react";

const Effect_cleanup = () => {

    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizing = () => {
            setwindowWidth(windowWidth);
        }

        window.addEventListener('resize', handleResizing);

        return () => {
            window.removeEventListener('resize', handleResizing);
        }

    }, [])

    console.log(windowWidth);

    return(
        <>
            <p>Some effects require cleanup to reduce memory leaks such as Timeouts, subscriptions, event listeners, and other effects </p>
            <div>Window Width: {windowWidth} </div>
        </>
    )
}

export default Effect_cleanup;