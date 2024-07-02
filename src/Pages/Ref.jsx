/* useRef Hook */

import { useRef } from "react";

import { Button } from "@headlessui/react";
import Headerpagetitle from "../Components/Headerpagetitle";

const Ref = () => {

  const count = useRef(0); //Initial value set to '0'

  /* Current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. 
  If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property. */
  const handleClick = () => {
    count.current = count.current + 1;
    console.log(`Count: ${count.current}`)
  }

    return (

      <div className='w-screen h-screen'>

      <Headerpagetitle title={'useRef Page'}/>

      <article className="ml-4 pb-4">
        The 'useRef' Hook allows you to persist values between renders. 
        It can be used to store a mutable value that does not cause a re-render when updated.
        Not Appropriate when storing information you want to display on the screen
      </article>

      <div>

        <p> Open Debugging Tool to view output. </p>

        <Button className='border bg-gray-100 p-2 mr-2 my-2' onClick={() => handleClick()}>
          Click Me!
        </Button>
      </div>





      
      </div>

    )
}

export default Ref;