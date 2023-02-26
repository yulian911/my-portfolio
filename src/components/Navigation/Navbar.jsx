import React, { useState } from 'react'
import { nav } from '../../features/constans'
import css from './navbar.module.css'
import { Link } from 'react-scroll'

const Navbar = ({ select, setSelect }) => {
  return (
    <div className={css.nav_right}>
      <ul>
        {nav.map((el, index) => {
          return (
            <li key={index} className={`${select === index ? css.active : null}`}>
              <Link
                smooth
                spy
                onClick={() => setSelect(index)}
                to={`#${el.name}`}
                className={css.link}>
                <span className={`${css.icon}`}>{el.image}</span>
                <span className={css.text}>{el.name}</span>
              </Link>
            </li>
          )
        })}
        <li className={css.indicator}></li>
      </ul>
    </div>
  )
}

export default Navbar
