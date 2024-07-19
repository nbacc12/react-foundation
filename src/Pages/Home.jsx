/* Home Page */

import React from 'react';
import reactLogo from '../assets/react.svg'

import { Input, Field, Textarea, Label, Button} from '@headlessui/react'

import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";


// Main page
const Home = () => {

  const navigate = useNavigate();

  const hooks = [
    { id: 1, name: 'useState', link: '/useState' },
    { id: 2, name: 'useEffect', link: '/useEffect' },
    { id: 3, name: 'useRef', link: '/useRef' },
    { id: 4, name: 'useContext', link: '/useContext' },
    { id: 5, name: 'useReducer', link: '/useReducer' },
    { id: 6, name: 'useCallback', link: '/useCallback' },
    { id: 7, name: 'useMemo', link: '/useMemo' },
  ]

  const Fetching = [
    { id: 1, name: 'Javascript fetch()', link: '/useState' },
    { id: 2, name: 'useFetch Custom Hook', link: '/useEffect' },
    { id: 3, name: 'Axios', link: '/useRef' },
  ]

  return (
    <div className='h-screen'>

      {/* Contains title and short description */}
      <header className='w-screen h-64 bg-teal-600 p-10 flex flex-col justify-between place-items-center'>

        <h1 className="font-bold text-white text-3xl md:text-5xl">
          Learn Basics of React
        </h1>

        <img src={reactLogo} className="logo react" alt="React logo" width={75} />

        <p className='font-semibold text-yellow-200 text-sm md:text-lg'>
          Cover fundamental features including hooks, data fetching
        </p>

      </header>

      {/* Contains 'list of content' boxes */}
      <section className='flex flex-col gap-5 p-10 items-center md:flex-row md:justify-center md:items-stretch'>

        <div className='border border-teal-300 rounded-lg w-40 p-3 shadow-xl shadow-teal-200 bg-yellow-200'>
          <h2 className='font-bold'>Hooks</h2>

          <ul className='list-disc list-inside'>
            {hooks.map(item => (
              <li key={item.id}>
                <Button onClick={() => navigate(item.link)} className='hover:text-blue-500'> {item.name} </Button>
              </li>
            ))}

          </ul>
        </div>


        <div className='border border-teal-300 rounded-lg w-40 p-3 shadow-xl shadow-teal-200 bg-yellow-200 hover:bg-blue-300'>
          <NavLink to='/Fetch'>
            <h2 className='font-bold'>Fetch Methods</h2>

            <ul className='list-disc list-inside items-start'>
              {Fetching.map(item => (
                <li key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          </NavLink>
        </div>

      </section>

    </div>

  )
}

export default Home;