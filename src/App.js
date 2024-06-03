import React from 'react'
import ContectButton from './Home/ContectButton'
import './App.css'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import WhyWeAreBest from './WhyWEAreBest/WhyWeAreBest'
import OurCompnyGroth from './ourCompnyGroth/OurCompnyGroth'
import Whychoose from './Whychooseus/Whychoose'
import ClintFeedBack from './ClintFeedBack/ClintFeedBack'
import {Routes,Route} from 'react-router-dom';
import ContectUs from './ContectUs/ContectUs'

const App = () => {
  return (
    <div className='APPContainer'>
      <Routes>
       
        <Route  path='/ContectUs' element={<ContectUs/>} />
      
      </Routes>
        <ContectButton/>
      <WhatWeDo/>
      <WhyWeAreBest/>
      <Whychoose/>
      <OurCompnyGroth/>
      <ClintFeedBack/>
    </div>
  )
}

export default App