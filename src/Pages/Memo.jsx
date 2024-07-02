/* useMemo Hook*/

import {useState, useMemo} from 'react'
import Headerpagetitle from "../Components/Headerpagetitle";

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

const Memo = () => {

  const [text, setText] = useState('Sample Text');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const handleA = () => {
    setA(a + 1);
  }

  const handleB = () => {
    setB(b + 1);
  }

  const handleText = () => {
    setText("New Text");
  }

  //this function will render when 'Set Text' button is clicked.
  // const complexCalc = () => {
  //  console.log('Calculating sum....')
  //   return a + b;
  // }

  //This function will not re-render when 'set text' button is clicked as its memoized
  const complexCalc = useMemo(() => {
    console.log('Calculating sum....');
    return a + b;
  }, [a,b])

  const btnstyle = 'border bg-gray-100 p-2 mr-2 my-2'

    return (
      <div className='w-screen h-screen'>

        <Headerpagetitle title={'useMemo Page'}/>

        <article> 
          The 'useMemo' hook can store the result of a function call and reuse it when the dependencies of that function haven't changed, 
          rather than recalculating the value on every render.
        </article>

        <p>Open debugging tool to view results/behaviour</p>

        <div>

          <p>{`Text: ${text}`}</p>
          <p>{`Value of A: ${a}`}</p>
          <p>{`Value of B: ${b}`}</p>
          <p>{`Sum: ${complexCalc}`}</p>


          <Button className={btnstyle} onClick={() => handleText()}>Set Text</Button>
          <Button className={btnstyle} onClick={() => handleA()}>Increment A</Button>
          <Button className={btnstyle} onClick={() => handleB()}>Increment B</Button>



        </div>

      </div>
    )
}

export default Memo;