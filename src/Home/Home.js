import ContactButton from 'react'
import React from 'react'
import WhatWeDo from '../WhatWeDo/WhatWeDo'
import WhyWeAreBest from '../WhyWEAreBest/WhyWeAreBest'
import Whychoose from '../Whychooseus/Whychoose'
import OurCompnyGroth from '../ourCompnyGroth/OurCompnyGroth'
import ClintFeedBack from '../ClintFeedBack/ClintFeedBack'

const Home = () => {
  return (
    <div>
          <ContactButton/>
      <WhatWeDo/>
      <WhyWeAreBest/>
      <Whychoose/>
      <OurCompnyGroth/>
      <ClintFeedBack/>
    </div>
  )
}

export default Home