/* useState Hook */

import { useState } from "react";

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'


import Headerpagetitle from "../Components/Headerpagetitle";

const State = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(1);

  const [input, setInput] = useState({
    firstName: '',
    lastName: ''
  })

  const handleReset = () => {
    setName('');
    setAge(1);

    setInput({
      firstName: '',
      lastName: ''
    });
  }



    return (

      <div className='w-screen h-screen'>

        <Headerpagetitle title={'useState Page'} />

        <article className="flex justify-center">
          <p className="w-5/6 ml-4 pb-4 leading-7 text-left">
          The 'useState' Hook allows users to track state in a function component.
          </p>
        </article>

        {/* Basic useState */}
        <div className='flex flex-row gap-10 justify-center'>

          <div>
            <h3 className="font-bold mb-2">Example 1:  Basic useState </h3>
            <Field>
              <Label>Name: </Label>
              <Input
                type='text'
                className='border'
                value={name}
                onChange={e => setName(e.target.value)} />
            </Field>

            <Button className='border bg-gray-100 p-2 mr-2 my-2' onClick={() => setAge(age + 1)}>
              Increment Age
            </Button>

            <p>Hello, {name}. You are {age}.</p>

          </div>

          {/* useState with objects*/}
          <div>
            <h3 className="font-bold mb-2">Example 2: Initialized w/ Object</h3>

            {/* '...input is previous state of variable in the object'*/}
            <form className="my-2">

              <Field>
                <Label>First Name: </Label>
                <Input
                  type='text'
                  className='border'
                  value={input.firstName}
                  onChange={e => setInput({ ...input, firstName: e.target.value })} /> 
              </Field>

              <Field>
                <Label>Last Name: </Label>
                <Input
                  type='text'
                  className='border'
                  value={input.lastName}
                  onChange={e => setInput({ ...input, lastName: e.target.value })} />
              </Field>

            </form>

            <p className="mb-5">{`Full Name: ${input.firstName} ${input.lastName}`}</p>

          </div>

        </div>

        <div className="flex justify-center">
          <Button className='bg-gray-100 p-2 my-2' onClick={() => handleReset()}>
            Reset
          </Button>
        </div>

      </div>
    )
}

export default State;

