import React, { useState } from 'react';
import css from './gallery.module.css';

const Gallery = () => {
  const [select, setSelect] = useState(0);
  const [selectedTab, setSelectedTab] = useState('All');
  return (
    <div className={`${css.container}`}>
      <div className={`flex flex-col `}>
        <ul className={`${css.nav}`}>
          {['All', 'Mobile App', 'React App'].map((el, index) => (
            <li key={index} className={`${css.nav_item} `} onClick={() => setSelectedTab(el)}>
              <a
                // href="#"
                onClick={() => setSelect(index)}
                // first
                className={`nav-link ${select === index ? 'active' : null} `}>
                {el}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
