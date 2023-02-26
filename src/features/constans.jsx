import { AiOutlineFlag, AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai'

import { SlCalender, SlPicture } from 'react-icons/sl'
import { SiAboutdotme, SiSkillshare } from 'react-icons/si'

export const nav = [
  { name: 'Home', image: <AiOutlineHome />, color: '#f44336' },
  { name: 'About', image: <SiAboutdotme />, color: '#ffa117' },
  { name: 'Skills', image: <AiOutlineFlag />, color: 'rgb(15, 27, 199)' },
  { name: 'Gallery', image: <SlPicture />, color: '#f321e5' },
  { name: 'Contact', image: <AiOutlineMessage />, color: '#b145e9' },
]
