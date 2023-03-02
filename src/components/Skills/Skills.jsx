import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { js, node } from '../../assets'
import './skills.css'
import 'react-tooltip/dist/react-tooltip.css'

const data = [
  { name: 'JS', icon: js },
  { name: 'Node', icon: node },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
  { name: 'React', icon: js },
]
const exp = [
  {
    year: 2020,
    works: [
      { name: 'IT Specialist' },
      { company: 'Urząd Miasta Torun' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2019,
    works: [
      { name: 'IT Specialist' },
      { company: 'Urząd Miasta Torun' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2019,
    works: [
      { name: 'IT Specialist' },
      { company: 'Urząd Miasta Torun' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2019,
    works: [
      { name: 'IT Specialist' },
      { company: 'Urząd Miasta Torun' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
  {
    year: 2017,
    works: [
      { name: 'IT Specialist' },
      { company: 'Urząd Miasta Torun' },
      {
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia mollitia porro rerum modi praesentium nisi, illum sequi aut deserunt aliquid laudantium maiores, atque cum amet! Cupiditate quidem nobis inventore voluptatibus! ',
      },
    ],
  },
]

const Skills = () => {
  return (
    <div className="flex h-[100svh] pt-[100px]   justify-center items-center">
      <div className="flex basis-[70%] m-5 flex-col   ">
        <div className="skills-container">
          <div className="skills-text-box">
            <h2 className="skills-text">Skills & Experiences</h2>
          </div>

          <div className="skills-box">
            {data.map((el, index) => (
              <div className="skills-item">
                <img src={el.icon} alt={'icon'} />
                <p>{el.name}</p>
              </div>
            ))}
          </div>
          <div className="skills-experience">
            {exp.map((el, index) => (
              <motion.div className="skills-exp-item" key={el.year}>
                <div className="skills-exp-year">
                  <p className="bold-text">{el.year}</p>
                </div>
                <motion.div className="skills-exp-works">
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
                        <p className="font-[500] mt-[5px]">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip">
                        {work.desc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
