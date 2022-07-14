import React from 'react';
import { images } from '../../constants'
import './AboutUs.scss';

const AboutUs = () => (
  <div className='aboutUs app__bg flex__center section__padding' id='about'>

    <div className="aboutUs__overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="aboutUs__content flex__center">

      <div className="aboutUs__content_about">
        <h1 className='headtext__cormorant'>
          About US
        </h1>
        <img src={images.spoon} className="spoon__img" alt="about spoon" />
        <p className="p__opensans">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Proin convallis pellentesque interdum. 
        </p>
        <button type='button' className="custom__button">
          Know More 
        </button>
      </div>

      <div className="aboutUs__content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="aboutUs__content_history">
        <h1 className='headtext__cormorant'>
          Our History
        </h1>
        <img src={images.spoon} className="spoon__img" alt="about spoon" />
        <p className="p__opensans">
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Proin convallis pellentesque interdum. 
        </p>
        <button type='button' className="custom__button">
          Know More 
        </button>
      </div>

    </div>
  </div>
);

export default AboutUs;
