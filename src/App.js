import React ,{useContext}from 'react'
import ContectButton from './Home/ContectButton'
import './App.css'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import WhyWeAreBest from './WhyWEAreBest/WhyWeAreBest'
import OurCompnyGroth from './ourCompnyGroth/OurCompnyGroth'
import Whychoose from './Whychooseus/Whychoose'
import ClintFeedBack from './ClintFeedBack/ClintFeedBack'
import {Routes,Route} from 'react-router-dom';
import ContectUs from './ContectUs/ContectUs'
import { MyContext } from './context/Context'
import Footer from './Footer/Footer'

const App = () => {
  const {value} = useContext(MyContext)
  return (
    <div className='APPContainer'>
      {value ? (
        <ContectUs />
      ) : (
        <>
          <ContectButton />
          <WhatWeDo />
          <WhyWeAreBest />
          <Whychoose />
          <OurCompnyGroth />
          <ClintFeedBack />
          <Footer/>
        </>
      )}
    </div>
  )
}

export default App