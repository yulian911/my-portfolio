import React, { useEffect } from 'react'
import css from './home.module.css'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
// import { Link } from 'react-scroll'
import { MdAdminPanelSettings } from 'react-icons/md'

const Home = ({ setSelect }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        delay: 1,
      },
    },
    hidden: {
      opacity: 0,
      x: '100%',
    },
  }

  const item2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: '-100%',
    },
  }

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <motion.div
      initial="hidden"
      animate={control}
      variants={list}
      ref={ref}
      className="flex h-[100vh] w-full overflow-hidden justify-center items-center flex-col relative ">
      <h1 className={css.title}>PORTFOLIO</h1>
      <div className="w-[500px]   absolute top-[10px] right-[20px] flex justify-end ">
        <div className={`${css.adminButton} `}>
          <div className={`${css.inner}`}>
            <Link to="/login" className={`${css.modalButton}`}>
              <p>Admin Panel</p>
            </Link>
            <span className={`${css.iconContainer}`}>
              {/* <AiOutlineInfoCircle /> */}
              <MdAdminPanelSettings size={35} />
            </span>
          </div>
        </div>
      </div>
      <div className={css.circle}>
        <h3
          className={`${css.gradient} absolute z-10 top-[5%] left-[39%]  md:left-[43%] font-bold `}>
          My Design
        </h3>

        <h3
          className={`${css.gradient} absolute z-10 bottom-[3%] left-[45%] md:left-[47%] font-bold `}>
          2023
        </h3>
        <div className="w-full h-full bg-slate-800 rounded-[50%] ">
          <div className={css.content}></div>
        </div>
      </div>
      <div className={css.bottomBox}>
        <motion.h2 variants={item2} className={`${css.gradient} ${css.bottomText} `}>
          Make Your Business
        </motion.h2>
        <motion.h2 variants={item} className={`${css.gradient} ${css.bottomText} `}>
          More Powerfull
        </motion.h2>
      </div>
      {/* <div className="absolute bottom-[5%] left-[48%] flex gap-2">
        <button className="w-[35px] h-[35px] bg-black rounded-sm ">
          <AiFillGithub size={35} color="white" />
        </button>
        <button className="w-[35px] h-[35px] bg-blue rounded-sm">
          <BsLinkedin size={35} color="#0A66C2" />
        </button>
      </div> */}
    </motion.div>
  )
}

export default Home
