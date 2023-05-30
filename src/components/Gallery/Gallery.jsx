import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import css from './gallery.module.css'
import { motion } from 'framer-motion'
import { about01, about02, about03, about04, Logo } from '../../assets'

const work = [
  {
    imgUrl: about01,
    projectLink: 'https://music-player-app-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Liriks player',
    description: 'Liriks player',
    tags: 'React',
  },
  {
    imgUrl: about02,
    projectLink: 'https://shop-template.netlify.app/',
    codeLink: 'dsfds',
    title: 'Shop ',
    description: 'Shop Template',
    tags: 'React',
  },
  {
    imgUrl: about03,
    projectLink: 'https://ntf-site-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'NTF Site',
    description: 'NTF Site',
    tags: 'React',
  },
  {
    imgUrl: about04,
    projectLink: 'https://fitnes-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Fitnes',
    description: 'Fitnes',
    tags: 'React',
  },
  {
    imgUrl: about02,
    projectLink: 'https://pizza-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Pizza ',
    description: 'Pizza  ',
    tags: 'React',
  },

  {
    imgUrl: about01,
    projectLink: 'https://countries-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Country',
    description: 'Country',
    tags: 'React',
  },
  {
    imgUrl: about03,
    projectLink: 'https://portfolio-v1-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Portfolio',
    description: 'Portfolio old v1',
    tags: 'React',
  },
  {
    imgUrl: about04,
    projectLink: 'https://play.google.com/store/apps/details?id=com.cudapp&gl=PL',
    codeLink: 'dsfds',
    title: 'OnkoAsc',
    description: 'OnkoAsc',
    tags: 'Mobile',
  },
  {
    imgUrl: about02,
    projectLink: 'dsfdf',
    codeLink: 'dsfds',
    title: 'TCZK',
    description: 'TCZK Tools ',
    tags: 'Mobile',
  },
  {
    imgUrl: about04,
    projectLink:
      'https://expo.dev/accounts/yulian911/projects/rn_jobs_expo/builds/5f5532d2-86f7-4ec7-9191-3ab6a1b89850',
    codeLink: 'dsfds',
    title: 'Jobs Expo',
    description: 'RN EXPO EXPO ROUTER ',
    tags: 'Mobile',
  },
  {
    imgUrl: about01,
    projectLink:
      'https://expo.dev/accounts/yulian911/projects/engli-my-app/builds/a74874a2-60ac-4387-9bab-5c72db6f36b0',
    codeLink: 'dsfds',
    title: 'English APP',
    description: 'English App  ',
    tags: 'Mobile',
  },
  {
    imgUrl: about03,
    projectLink:
      'https://expo.dev/accounts/yulian911/projects/todo-animated/builds/2bb3ee77-c070-46f9-a5db-c3be7830efd4',
    codeLink: 'dsfds',
    title: 'Todo List',
    description: 'Animated Todo List ',
    tags: 'Mobile',
  },
  {
    imgUrl: about02,
    projectLink: 'https://jobs-ym.netlify.app/',
    codeLink: 'dsfds',
    title: 'Jobs Search',
    description: 'Jobs Search ',
    tags: 'React',
  },
  {
    imgUrl: about03,
    projectLink: 'https://gpt-ai-yuli.netlify.app/',
    codeLink: 'dsfds',
    title: 'Summerize Articles',
    description: 'Summerize Articles with OpenAi GPT-4 ',
    tags: 'React',
  },
  {
    imgUrl: about02,
    projectLink: 'https://next-quiz-uag6.vercel.app/',
    codeLink: 'dsfds',
    title: 'Quiz',
    description: 'Next.js ',
    tags: 'React',
  },
  {
    imgUrl: about01,
    projectLink: 'https://portfolio-v3-ym.netlify.app/',
    codeLink: 'dsfds',
    title: '3D Portfolio',
    description: '3D ',
    tags: 'React',
  },
]

const Gallery = () => {
  const [select, setSelect] = useState(0)
  const [works, setWorks] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [selectedTab, setSelectedTab] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [show, setShow] = useState(false)

  useEffect(() => {
    setWorks(work)
    setFilterWork(work)
  }, [])

  const handleWorkFilter = item => {
    setSelectedTab(item)
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter(work => work.tags.includes(item)))
      }
    }, 500)
  }

  return (
    <div className={`${css.container} min-h-[100svh]  `}>
      <div className={`flex flex-col mb-1 `}>
        <ul className={`${css.nav}`}>
          {['All', 'Mobile', 'React'].map((el, index) => (
            <li key={index} className={`${css.nav_item} `} onClick={() => handleWorkFilter(el)}>
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
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={`${css.galleryPortfolio}`}>
        {filterWork
          .map((work, index) => (
            <div className={`${css.galleryItem}`} key={index}>
              <div className={`${css.galleryImageContainer}`}>
                <img src={work.imgUrl} alt={work.name} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className={`${css.galleryImageHover}`}>
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex justify-center items-center">
                      <AiFillEye />
                    </motion.div>
                  </a>
                  {/* <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="flex justify-center items-center">
                      <AiFillGithub />
                    </motion.div>
                  </a> */}
                </motion.div>
              </div>

              <div className={`${css.galleryContent}`}>
                <h4 className="font-bold">{work.title}</h4>
                <p className="text-[10px] sm:text-[14px] hidden md:flex" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className={`${css.galleryTag}`}>
                  {/* <p className="p-text">{work.tags[0]}</p> */}
                  <p className="p-text gradient">{work.tags}</p>
                </div>
              </div>
            </div>
          ))
          .slice(0, show ? filterWork.length : 8)}
      </motion.div>
      {filterWork.length >= 6 ? (
        <div className="mt-[10px]  ">
          <button className="buttonForm p-text  bg-[#313bac]" onClick={() => setShow(!show)}>
            {' '}
            {show ? 'Pokaż mniej' : 'Pokaż więcej'}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Gallery
