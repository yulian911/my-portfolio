import React, { useEffect } from 'react'
import './skills.css'
import {
  css,
  git,
  html,
  js,
  mongoDb,
  node,
  react,
  reactNative,
  redux,
  sass,
  tailwind,
  typescript,
} from '../../assets'
import { motion, useAnimation } from 'framer-motion'

const data = [
  { name: 'JS', icon: js },
  { name: 'Node', icon: node },
  { name: 'Redux', icon: redux },
  { name: 'React', icon: react },
  { name: 'Typescript', icon: typescript },
  { name: 'HTML', icon: html },
  { name: 'GIT', icon: git },
  { name: 'CSS', icon: css },
  { name: 'Sass', icon: sass },
  { name: 'Tailwind', icon: tailwind },
  { name: 'MongoDb', icon: mongoDb },
  { name: 'RN', icon: reactNative },
]

const exp = [
  {
    year: 2022,
    works: [
      { name: 'IT Specialist' },
      { company: 'Torun City Hall' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2021,
    works: [
      { name: 'Junior Frond Developer ' },
      { company: 'Open Labotec sp. z o.o (Bydgoszcz)' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2020,
    works: [
      { name: 'Trainee IT ' },
      { company: 'Open Labotec sp. z o.o (Bydgoszcz)' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
]

const SkillsTest = () => {
  return (
    <div className="testContainer ">
      <div className="textContainer">
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center gradient font-bold ">
          Skills & Experiences
        </h2>
      </div>
      <div className="skillsContainer  ">
        <div className="grid  grid-cols-5 gap-1 md:grid-cols-4 md:gap-4 ">
          {data.map((el, i) => (
            <motion.div
              key={i}
              className="w-[75px] h-[75px] lg:w-[100px] lg:h-[100px]  bg-violet-800 rounded-lg flex flex-col justify-center items-center"
              initial={{
                opacity: 0,
                targetX: i % 2 === 0 ? -50 : 50,
                translateY: -50,
              }}
              whileInView={{ opacity: [0, 1] }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: i * 0.2 }}>
              <img src={el.icon} alt={'icon'} className="w-[30px] md:w-[30px] lg:w-[55px]" />
              <p className="text-[10px] md:text-[14px] lg:text-[20px] text-center">{el.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="experienceContainer">
        <div>
          {exp.map((el, i) => (
            <motion.div className="experienceYears" key={i}>
              <div className="skills-exp-year">
                <p className="bold-text gradient ">{el.year}</p>
              </div>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={`experienceWorks`}>
                {el.works.map(work => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}>
                      <h4 className="font-bold ">{work.name}</h4>
                      <p className="font-[500] mt-0  md:mt-[5px]">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsTest
