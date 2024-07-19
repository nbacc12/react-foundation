/* useReducer Hook */

import { useReducer } from "react";
import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

import Headerpagetitle from "../Components/Headerpagetitle";

//Initial values upon rendering
const initialstate = {
  name: 'Thomas',
  age: 1
}


//The 'reducer function' that specifies how the state gets updated
//Action: The action performed by the user.
const reducer_function = (state, action) => {

  switch(action.type) {
    case 'incremented age': {
      return {
        age: state.age + 1,
        name: state.name
      }
    }

    case 'change name': {
      return {
        age: state.age,
        name: action.nextName
      }
    }

    case 'reset values': {
      return {
        age: initialstate.age,
        name: initialstate.name
      }
    }
  }

}

const Reducer = () => {

  const [currentstate, dispatch] = useReducer(reducer_function, initialstate);

  /* 
    'Dispatch function' returned by useReducer lets you update the state to a different value and trigger a re-render.  
  */
    const handleName = (event) => {
      dispatch({type: 'change name', nextName: event.target.value})
    }

    const handleBtn = () => {
      dispatch({type: 'incremented age'})
    }

    const handleReset = () => {
      dispatch({type: 'reset values'})
    }


    return (

      <div className='w-screen h-screen'>

      <Headerpagetitle title={'useReducer Page'}/>
      
      <article className="flex justify-center">
        <p className="w-5/6 ml-4 pb-4 leading-7 text-left">
        The 'useReducer' Hook is used when you find yourself keeping track of multiple pieces of state that rely on complex logic. 
        Similar to 'useState' Hook.
        </p>
      </article>

        <div className="flex flex-row gap-10 justify-center pb-4">
          <div>
            <h3 className="font-bold mb-2">Example of Reducer </h3>
            <Field>
              <Label>Name: </Label>
              <Input
                type='text'
                className='border'
                value={currentstate.name}
                onChange={handleName}
              />
            </Field>

            <Button className='border bg-gray-100 p-2 mr-2 my-2' onClick={handleBtn}>
              Increment Age
            </Button>

            <Button className='bg-gray-100 p-2 my-2' onClick={() => handleReset()}>
              Reset
            </Button>

            <p>Hello, {currentstate.name}. You are {currentstate.age}.</p>

          </div>
        </div>
      
      </div>

    )
}

export default Reducer;