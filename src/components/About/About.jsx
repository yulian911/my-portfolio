import React, { useEffect } from 'react'
import { GiEarthAsiaOceania, GiLargePaintBrush, GiPhotoCamera } from 'react-icons/gi'
import css from './about.module.css'

const About = () => {
  return (
    <div className={`${css.containers}`}>
      <div className={`${css.tabs}`}>
        <input id="web" defaultChecked type={'radio'} name="slider" />
        <input id="graphits" type={'radio'} name="slider" />
        <input id="photography" type={'radio'} name="slider" />
        <div className={css.buttons}>
          <label htmlFor="web"></label>
          <label htmlFor="graphits"></label>
          <label htmlFor="photography"></label>
        </div>
        <div className={css.content}>
          <div className={css.box}>
            {/* <div className={css.contentBx}>
              <GiEarthAsiaOceania />
              <h2>Web Develop</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus, atque iste
                a tempora doloribus saepe excepturi fuga ipsa non esse consequatur nam numquam
                impedit enim perferendis placeat rem odio.
              </p>
              <button>Learn More</button>
            </div> */}
            <div className="card-about rgb">
              <div className="card-text">
                {/* <span className="date">4 days ago</span> */}
                <h2>About me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus,
                  debitis, provident veniam architecto delectus unde voluptatibus necessitatibus
                  esse est.
                </p>
              </div>
              <div className="card-image"></div>
            </div>
          </div>
          <div className={css.box}>
            {/* <div className={css.contentBx}>
              <GiLargePaintBrush />

              <h2>Graphits</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus, atque iste
                a tempora doloribus saepe excepturi fuga ipsa non esse consequatur nam numquam
                impedit enim perferendis placeat rem odio.
              </p>
              <button>Learn More</button>
            </div> */}
            <div className="card-about rgb">
              <div className="card-text">
                {/* <span className="date">4 days ago</span> */}
                <h2>About me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus,
                  debitis, provident veniam architecto delectus unde voluptatibus necessitatibus
                  esse est.
                </p>
              </div>
              <div className="card-image"></div>
            </div>
          </div>
          <div className={css.box}>
            {/* <div className={css.contentBx}>
              <GiPhotoCamera />
              <h2>Photography</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui repellendus, atque iste
                a tempora doloribus saepe excepturi fuga ipsa non esse consequatur nam numquam
                impedit enim perferendis placeat rem odio.
              </p>
              <button>Learn More</button>
            </div> */}
            <div className="card-about rgb">
              <div className="card-text">
                {/* <span className="date">4 days ago</span> */}
                <h2>About me</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus,
                  debitis, provident veniam architecto delectus unde voluptatibus necessitatibus
                  esse est.
                </p>
              </div>
              <div className="card-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
