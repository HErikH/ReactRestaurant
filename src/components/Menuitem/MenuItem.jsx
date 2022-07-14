import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tags }) => (
  <div className='menuItem'>
    <div className="menuItem__head">
      <div className="menuItem__name">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>
          {title}
        </p>
      </div>

      <div className='menuItem__dash'/>

      <div className="menuItem__price">
        <p className="p__cormorant">
          {price}
        </p>
      </div>

      <div className="menuItem__sub">
        <p className="p__opensans" style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  </div>
);

export default MenuItem;
