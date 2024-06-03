import React from 'react'
import './Whychoos.css';
import image1 from '../assets/whychoosus/1.png'
import image2 from '../assets/whychoosus/2.png'
import image3 from '../assets/whychoosus/3.png'
import image4 from '../assets/whychoosus/4.png'
const Whychoose = () => {
  return (
    <div className ='WHYCHOOSCONTAINER'>
        <div className ='chooseusheading'>WHY CHOOSE US</div>
        <div className='wyweareb'>WHY WE ARE BEST</div>
        <div className ='boxs'>
            <div className ='box'>
                
                <img src={image1} className='image'/>
                <div className='num'>Clarified Vision & Target</div>
                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
             </div>
              <div className ='box'>
                <img src={image2} className='image'/>
                
                <div className='num'>High Performance</div>
                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
             </div> 
             <div className ='box'>
                <img src={image3} className='image'/>
              
                <div className='num'>Maintain Security</div>
                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
             </div> 
             <div className ='box'>
                <img src={image4} className='image'/>
                 
                <div className='num'>Better Strategy & Quality</div>
                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</div>
             </div>
           
            
        </div>
    </div>
  )
}

export default Whychoose