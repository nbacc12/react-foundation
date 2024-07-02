// useEffect - Empty Array---> Runs on 1st render only

import {useState, useEffect} from "react"



const Effect_emptyarray = () => {

    const [emptyCount, setemptyCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setemptyCount(emptyCount + 1)
        }, 500)
    }, [])

    return(
        <>

            <p> Runs on 1st Render only </p>

            <p>You have rendered {emptyCount} times</p>
        </>
    )
}

export default Effect_emptyarray;