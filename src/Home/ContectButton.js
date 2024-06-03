import React from 'react';
import img from './hero.png'; // Adjust the path as per your project structure
import './ContectButton.css'
import { MyContext } from '../context/Context';
import { useContext } from 'react';
const ContactButton = () => {
  const {setValue} = useContext(MyContext);
  const ContectShowHandler=()=>{
    setValue(true);
  }
  return (
    <div>

    <div className='HomeContainer'>
      <div className='Home'>
        <div>
          <h3 className='Award'>AWARD WINNING</h3>
          <h1>DIGITAL MARKETING AGENCY</h1>
          <p className='HomePara'>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
          </p>
        <button className='btn' onClick={ContectShowHandler}>
         ContectUs
        </button>
        </div>
        <div>
          <img src={img} alt='Digital Marketing Agency' className='imggirl'/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactButton;
