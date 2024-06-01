import React from 'react';
import img from './hero.png'; // Adjust the path as per your project structure
import './ContectButton.css'
const ContactButton = () => {
  return (
    <div>

    <div className='HomeContainer'>
      <div className='Home'>
        <div>
          <h3>AWARD WINNING</h3>
          <h1>DIGITAL MARKETING AGENCY</h1>
          <p>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum
          </p>
        <button className='btn'>ContectUs</button>
        </div>
        <div>
          <img src={img} alt='Digital Marketing Agency' />
        </div>
      </div>
    </div>
    </div>
  );
}

export default ContactButton;
