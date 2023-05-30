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
                  I am a skilled front-end developer with 2 years of experience in the field. I am
                  proficient in a range of front-end development technologies including JavaScript,
                  React, CSS, and SCSS. In addition, I have a strong understanding of back-end
                  development technologies such as Node.js, Express, Firebase, MongoDB, and
                  Postgres.
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
                  Throughout my career, I have demonstrated a keen eye for detail and a passion for
                  creating beautiful, responsive, and user-friendly websites and applications. I
                  have experience working with both small and large development teams, and have a
                  proven track record of delivering high-quality work on time and within budget.
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
                  I am always eager to learn new technologies and techniques, and is committed to
                  staying up-to-date with the latest trends in front-end development. My combination
                  of technical expertise and strong communication skills make her a valuable asset
                  to any development team.
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
