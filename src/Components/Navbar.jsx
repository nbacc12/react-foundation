import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Button } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'


const styleItem = "hover:text-blue-500"; //styling for Menu names

//Dropdown Menus
const Submenu = ({menuitems, popmenu}) => {

  return (

    <Popover> 

      <PopoverButton className='flex items-center'>
        {popmenu}
        <ChevronDownIcon className="size-4 ml-1" />
      </PopoverButton>

      <PopoverPanel 
      transition
      anchor="bottom"
      className="divide-y rounded-xl bg-white/5 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0">
        
        <ul className="border bg-gray-200 p-2">

          {menuitems.map(item => 
            <li key={item.id} className={styleItem}>
              <NavLink to={item.link}> {item.page} </NavLink>
            </li>
          )}

        </ul>

      </PopoverPanel>

    </Popover>

  )
}

//Main Function of Module Component
const Navbar = () => {

  const [isNavOpen, setisNavopen] = useState(false); //tracks if mobile menu is open or closed

  //Enables opening & closing of mobile menu
  const toggle_navbtn = () => {
    setisNavopen(!isNavOpen)
  }

  const popmenu = ['Hooks', 'Algorithms'] //Dropdown menu categories

  //Hook Menu Items
  const hooksmenu = [
    {id: 1, page: 'useState', link: '/useState'},
    {id: 2, page: 'useEffect', link: '/useEffect'},
    {id: 3, page: 'useRef', link: '/useRef'},
    {id: 3, page: 'useContext', link: '/useContext'},
    {id: 3, page: 'useReducer', link: '/useReducer'},
    {id: 3, page: 'useCallback', link: '/useCallback'},
    {id: 3, page: 'useMemo', link: '/useMemo'},
  ]

  return (
    <>

      <nav className="bg-gray-100 border-gray-300">

        {/* Desktop Navigation  */}
        <div className="flex items-center justify-between mx-auto p-4">
        <h1 className="text-2xl font-semibold"> React Foundations </h1>

        <ul className="hidden md:flex flex-row gap-4 font-semibold">

          <li className={styleItem}>
            <NavLink to='/'> Home </NavLink>
          </li>

          <li className={styleItem}>
            <Submenu menuitems={hooksmenu} popmenu={popmenu[0]}/>
          </li>

          <li className={styleItem}>
            Algorithms
          </li>

        </ul>

        {/* Mobile Menu Button - Switches between hamburger menu & close button */}
        <Button className="md:hidden" onClick={() => toggle_navbtn()}>
          {!isNavOpen ? <Bars3Icon className="size-8 hover:bg-gray-300 rounded-lg" /> : <XMarkIcon className="size-8 hover:bg-gray-300 rounded-full" />}
        </Button>

        </div>

        {/* Mobile Navigation */}
        {isNavOpen &&

        <ul className="flex flex-col items-center p-2 gap-2 font-semibold md:hidden">

          <li className={styleItem}>
            <NavLink to='/'> Home </NavLink>
          </li>

          <li className={styleItem}>
            <Submenu menuitems={hooksmenu} popmenu={popmenu[0]}/>
          </li>

          <li className={styleItem}>
            Algorithms
          </li>

        </ul>}

      </nav>

    </>
  )
}

export default Navbar;