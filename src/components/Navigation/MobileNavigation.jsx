import React from 'react'
import { Link } from 'react-scroll'
import { nav } from '../../features/constans'
import css from './mobile.module.css'

const MobileNavigation = ({ select, setSelect }) => {
  return (
    <div className={css.navigation}>
      <ul>
        {nav.map((el, index) => (
          <li key={index} className={select === index ? css.active : null}>
            <Link smooth spy to={`#${el.name}`} onClick={() => setSelect(index)}>
              <span className={css.icon}>{el.image}</span>
              <span className={css.text}>{el.name}</span>
            </Link>
          </li>
        ))}
        <div className={`${css.indicator}   border-[6px] border-slate-800`} />
      </ul>
    </div>
  )
}

export default MobileNavigation
