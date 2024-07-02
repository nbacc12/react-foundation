// useEffect - No Dependency ---> Runs on every render

import { useState, useEffect } from "react";

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'


const Effect_nodependency = () => {

    const [autoCount, setautoCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setautoCount(autoCount + 1)
        }, 500)
    })



    return(
        <>
            <p> Runs on every render </p>

            <p>You have rendered {autoCount} times</p>


        </>
    )
}

export default Effect_nodependency;