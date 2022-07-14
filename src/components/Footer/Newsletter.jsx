import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.scss';

const Newsletter = () => {
  const [value, setValue] = useState('')

  return (
  <div className='newsLetter'>
    <div className="newsLetter__heading">
      <SubHeading title="NewsLetter" />
      <h1 className="headtext__cormorant">
        Subscribe To Our Newsletter
      </h1>
      <p className="p__opensans">
        And never miss latest Updates!
      </p>
    </div>
    <div className="newsLetter__input flex__cenetr">
      <input 
      value={value}
      onChange={(e) => setValue(e.target.value)} 
      type="email" 
      placeholder='Enter your e-mail address' />
      <button className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
)};

export default Newsletter;
