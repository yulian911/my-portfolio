import React from 'react'
import { motion } from 'framer-motion'

const SectionContainer = ({ children, id, refProps, bg }) => {
  return (
    <motion.section
      id={id}
      ref={refProps}
      // whileInView={{ y: [0, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`w-full   z-[-2] scrollSection ${bg}`}>
      {children}
    </motion.section>
  )
}

export default SectionContainer
