/* useEffect Hook */
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

import Headerpagetitle from "../../Components/Headerpagetitle";
import Effect_nodependency from './Effect_nodependency.jsx';
import Effect_emptyarray from './Effect_emptyarray.jsx';
import Effect_propstate from './Effect_propstate.jsx';
import Effect_cleanup from './Effect_cleanup.jsx';


const Effect = () => {

  const tabstyle = 'bg-gray-100 border rounded-lg p-2 hover:font-semibold focus:font-semibold focus:ring focus:ring-violet-300';


    return (

      <div className='w-screen h-screen'>

      <Headerpagetitle title={'useEffect Page'}/>

      <article className="ml-4 pb-4">
        The 'useEffect' Hook allows users to perform side effects in your components such as fetching data, directly updating the DOM, and timers.
      </article>

      <TabGroup>

      <TabList className='flex gap-6 mb-4 justify-center'>
        <Tab className={tabstyle}> No Dependency </Tab>
        <Tab className={tabstyle}> Empty Array </Tab>
        <Tab className={tabstyle}> Props/state Values </Tab>
        <Tab className={tabstyle}> Clean Up </Tab>
      </TabList>

      <TabPanels className='flex place-content-center'>
        <div className='flex justify-center border border-gray-400 rounded-lg w-3/5 p-4'>
        <TabPanel>
          <Effect_nodependency />
        </TabPanel>
        
        <TabPanel>
          <Effect_emptyarray />
        </TabPanel>
        
        <TabPanel>
          <Effect_propstate />
        </TabPanel>

        <TabPanel>
          <Effect_cleanup />
        </TabPanel>
        </div>
      </TabPanels>

    </TabGroup>
      
      </div>

    )
}

export default Effect;