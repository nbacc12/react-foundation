// useEffect - Prop/State ---> Runs on 1st render & anytime dependency value changes

import {useState, useEffect} from 'react'

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

const Effect_propstate = () => {

    const [counter, setCounter] = useState(0);
    const [calculate, setCalculate] = useState(0);

    const handleCounter = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        setCalculate(counter*2)
    }, [counter])


    return(
        <>
            <p> Runs on the first render & anytime dependency value changes </p>

            <Button onClick={() => handleCounter()} className='bg-gray-100 p-2 my-2 rounded-lg active:outline'>Click</Button>
            <p>{`Counter: ${counter}`}</p>
            <p>{`Calculation: ${calculate}`}</p>
        </>
    )
}

export default Effect_propstate;