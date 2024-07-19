/* useContext Hook */

import { createContext, useContext, useState } from "react";
import Headerpagetitle from "../Components/Headerpagetitle";

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

const TextContext = createContext(null);


const Context = () => {

  const [text, settext] = useState('Testing Context');
  

    return (
      <div className='w-screen h-screen'>

        <Headerpagetitle title={'useContext Page'}/>

        <article className="flex justify-center">
          <p className="w-5/6 ml-4 pb-4 leading-7 text-center">
            React Context allows users to manage state globally and pass data (e.g. state) between
            deeply nested components. 
          </p>
        </article>

        <TextContext.Provider value={text}>
          <Form />
        </TextContext.Provider>
      
      </div>

    )
}


function Form() {
  return (
    <div className='flex place-content-center my-4'>
    <Panel>
      <Button className='border bg-gray-100 p-2 mr-2 my-2 focus:outline'>Click Me</Button>
    </Panel>
    </div>
  );
}


function Panel({ children }) {

  const showText = useContext(TextContext);

  return (
    <section className='flex flex-col justify-center items-center border border-gray-400 rounded-lg w-3/5 p-4'>
      <h1 className="font-semibold"> {showText} </h1>
      {children}
    </section>
  )
}


export default Context;