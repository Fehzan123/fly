import React from 'react'
import './CompnyGroth.css';
import img1 from '../assets/Cmpnyassets/heart (2).png'
import img2 from '../assets/Cmpnyassets/clock (3).png'
import img3 from '../assets/Cmpnyassets/Path 4402.png'
import img4 from '../assets/Cmpnyassets/Path 4406.png'
const OurCompnyGroth = () => {
  return (
    <div className='componyContainer'>
        <div className='componyHeading'>
        
        <h5>EXPERTS GROWTS</h5>
        <h3>Our Company Growth</h3>
        </div>
        <div className ='boxs'>
            <div className ='box'>
                <img src={img1} /> 
                <div className='num'>199 +</div>
                <div>Staticfied Customers</div>
             </div>
              <div className ='box'>
                <img src={img2} /> 
                <div className='num'>1591+</div>
                <div>Days Of Operation</div>
             </div> 
             <div className ='box'>
                <img src={img3} /> 
                <div className='num'>283 +</div>
                <div>Complete Project</div>
             </div> 
             <div className ='box'>
                <img src={img4} /> 
                <div className='num'>75+</div>
                <div>Win Awards</div>
             </div>
           
            
        </div>
    </div>
  )
}

export default OurCompnyGroth