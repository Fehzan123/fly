import React, { useState } from 'react';
import Weare from '../assets/image.png';
import Genderless from '../assets/GenderlessHot.jpg';
import './WHYWEareBest.css';

const WhyWeAreBest = () => {
  const [displayedImage, setDisplayedImage] = useState(Weare);

  const handleClick = (index) => {
    if (index === 0 || index === 2) {
      setDisplayedImage(Genderless);
    } else {
      setDisplayedImage(Weare);
    }
  };

  return (
    <div className='WeareBestConainer'>
      <div className='WearebestHeading'>
        <h5>OUR PROJECT</h5>
        <h3>WHY WE ARE BEST</h3>
      </div>
      <div className='imgcontaner'>
        <img src={displayedImage} alt='Displayed' />

        <div className='containtcontainer'>
          {[{
            title: 'Genderless Kei – Japan’s Hot',
            description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
          }, {
            title: 'Better Strategy & Quality',
            description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
          }, {
            title: 'Genderless Kei – Japan’s Hot',
            description: 'Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of'
          }].map((content, index) => (
            <div className={`${index===1?'contentTow':'contentOne'}`} key={index} onClick={() => handleClick(index)}>
            <div className='GenderlessHeading'>{content.title}</div>
            <div>{content.description}</div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default WhyWeAreBest;
