import React from 'react'
import { motion } from 'framer-motion'

const SectionContainer = ({ children, bg, id, refProps }) => {
  return (
    <motion.section
      id={id}
      ref={refProps}
      // whileInView={{ y: [0, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`w-full h-[100svh] ${bg}`}>
      {children}
    </motion.section>
  )
}

export default SectionContainer
