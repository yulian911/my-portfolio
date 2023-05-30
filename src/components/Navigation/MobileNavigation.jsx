import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { nav } from '../../features/constans'
import css from './mobile.module.css'
import './mobile.css'

const MobileNavigation = ({ select, setSelect }) => {
  const [toggle, setToggle] = useState(false)
  return (
    // <div className={css.navigation}>
    //   <ul>
    //     {nav.map((el, index) => (
    //       <li key={index} className={select === index ? css.active : null}>
    //         <Link smooth spy to={`#${el.name}`} onClick={() => setSelect(index)}>
    //           <span className={css.icon}>{el.image}</span>
    //           <span className={css.text}>{el.name}</span>
    //         </Link>
    //       </li>
    //     ))}
    //     <div className={`${css.indicator}   border-[6px] border-slate-800`} />
    //   </ul>
    // </div>
    <div className="w-full flex justify-center">
      <ul className={`navigationNavBar ${toggle ? 'active' : null}`}>
        {nav.map((el, index) => {
          const style = { '--crl': el.color }
          return (
            <li key={index}>
              <Link
                smooth
                spy
                to={`#${el.name}`}
                style={style}
                className={select === index ? 'active' : null}
                onClick={() => setSelect(index)}>
                {el.name}
              </Link>
            </li>
          )
        })}
        <span className="toggleNavBar" onClick={() => setToggle(!toggle)}></span>
      </ul>
    </div>
  )
}

export default MobileNavigation
