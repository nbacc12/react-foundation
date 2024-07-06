/* Fetching Data in React from APIs */

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import Headerpagetitle from "../../Components/Headerpagetitle";
import Fetch_method from './Fetch_method';
import Fetch_axios from './Fetch-axios';
import Fetch_custom from './Fetch_custom';

//Main page
const Fetch = () => {

  const fetchtabstyle = 'bg-gray-100 border rounded-lg p-2 hover:font-semibold focus:font-semibold focus:ring focus:ring-violet-300';


    return (
      <div className='w-screen'>
        <Headerpagetitle title={'Fetch Data in React'} />

        <article className="ml-4 pb-4">
          Fetching Data in React from APIs can be done using the following 3 types of Methods.
        </article>

        <TabGroup>

          <TabList className='flex gap-6 mb-4 justify-center'>
            <Tab className={fetchtabstyle}> Javascript fetch() Method </Tab>
            <Tab className={fetchtabstyle}> useFetch Custom Hook </Tab>
            <Tab className={fetchtabstyle}> Axios </Tab>
          </TabList>

          <TabPanels className='flex place-content-center'>
            <TabPanel>
              <Fetch_method />
            </TabPanel>

            <TabPanel>
              <Fetch_custom />
            </TabPanel>

            <TabPanel>
              <Fetch_axios />
            </TabPanel>
          </TabPanels>

        </TabGroup>

      </div>
    )
}

export default Fetch;