import React from 'react';
import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Chef.scss';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">

      <SubHeading title="Che'f Word"/>
      <h1 className="headtext__cormorant">
        What we believe in
      </h1>

      <div className="chef-content">
        <div className="chef-content__quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>
           Lorem ipsum dolor sit amet,consectetur adipiscing elit.
          </p>
          <p className='p__opensans'>
           Duis rutrum nulla ipsum, maximus vulputate eleifend ut. 
           Phasellus rhoncus, lectus eu placerat maximus.
          </p>
        </div>
      </div>

    <div className="chef-content__sign">
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt="sign" />
    </div>

    </div>
  </div>
);

export default Chef;
