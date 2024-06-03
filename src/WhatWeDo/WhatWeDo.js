import React, { useState } from 'react';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import Icon from '../assets/icon.png';
import './whatwedo.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Custom Arrow Components
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 0.5)', right: '10px' }}
      onClick={onClick}
    >
      &#10095;
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'rgba(0, 0, 0, 0.5)', left: '10px', zIndex: 1 }}
      onClick={onClick}
    >
      &#10094;
    </div>
  );
};

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className='Container'>
      <div className='Whatwedocontainer'>
        <div className='whatdocontainer'>
          <div className='whatwodo'>What We Do</div>
          <div className='servec'>Services provide for you</div>
        </div>
        <p className='para'>
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
        </p>
      </div>
      <Slider {...settings}>
        {[img1, img2, img3,img1,img2,img3].map((img, index) => (
          <div
            key={index}
            className='imgcontainer'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={img} className='one' alt={`Slide ${index + 1}`} />
            {hoveredIndex === index && (
              <div className='webdev'>
                <img src={Icon} className='icon' alt='Web Development Icon' />
                <h3 className='webDevelopmnt'>WEB DEVELOPMENT</h3>
                <p className='webdevp'>
                  Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                  Pellentesque
                </p>
                <button className='READMORE'>READ MORE</button>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WhatWeDo;
