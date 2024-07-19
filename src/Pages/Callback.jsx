/* useCallback Hook */

import {useState, useCallback} from 'react'
import Headerpagetitle from "../Components/Headerpagetitle";

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

//This component won't re-render unneccessarily when 'setText' method runs. 
const ChildComponent = ({ onClick, btnstyle }) => {
  console.log('ChildComponent is rendered');
  
  return ( 
    <Button className={btnstyle} onClick={onClick}>Click me</Button>
  );
}

const Callback = () => {

  const [text, setText] = useState('Sample Text');
  const [count, setCount] = useState(0);

  //This is memoized.  Will not cause 'ChildComponent' to re-render unnecessarily when 'setText' method runs. 
  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [setCount])

  const btnstyle = 'border bg-gray-100 p-2 mr-2 my-2'

    return (

      <div className='w-screen h-screen'>

        <Headerpagetitle title={'useCallback Page'}/>

        <article className="flex justify-center">
          <p className="w-5/6 ml-4 pb-4 leading-7 text-left">
            The 'useCallback' hooks returns a memoized function. Only runs when dependents change.
            By memoizing a function, you ensure the function remains the same and does not change unnecessarily.
          </p>
        </article>

        <div>
          <p>{`Text: ${text}`}</p>
          <p>{`Count: ${count}`}</p>

          <Button className={btnstyle} onClick={() => setText('new text')}>Set Text</Button>
          <Button className={btnstyle} onClick={() => setCount(count + 1)}>Increment</Button>
          <ChildComponent onClick={incrementCount} btnstyle={btnstyle}/>
        </div>
    
      </div>
    )
}

export default Callback;