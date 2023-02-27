import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import About from './components/About/About';
import SectionContainer from './components/Container/SectionContainer';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import MobileNavigation from './components/Navigation/MobileNavigation';
import Navbar from './components/Navigation/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  const [select, setSelect] = useState(0);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = e => {
      if (window.scrollY >= homeRef.current.offsetTop && window.scrollY <= window.innerHeight / 2) {
        setSelect(0);
      } else if (
        aboutRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        skillsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setSelect(1);
      } else if (
        skillsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        galleryRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setSelect(2);
      } else if (
        galleryRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setSelect(3);
      } else if (
        contactRef.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
        footerRef.current.offsetTop - window.scrollY >= window.innerHeight / 2
      ) {
        setSelect(4);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App text-black relative">
      <div className="hidden md:flex fixed top-[30%] right-5 z-[9999]">
        <Navbar select={select} setSelect={setSelect} />
      </div>
      <div className="fixed bottom-[2%] w-full flex justify-center items-center z-[9999] md:hidden">
        <MobileNavigation select={select} setSelect={setSelect} />
      </div>

      <SectionContainer id="#Home" bg="bg-slate-800" refProps={homeRef}>
        <Home setSelect={setSelect} />
      </SectionContainer>
      <SectionContainer id="#About" bg="bg-slate-800" refProps={aboutRef}>
        <About />
      </SectionContainer>
      <SectionContainer id="#Skills" bg="bg-slate-800" refProps={skillsRef}>
        <Skills />
      </SectionContainer>
      <SectionContainer id="#Gallery" bg="bg-slate-800" refProps={galleryRef}>
        <Gallery />
      </SectionContainer>
      <SectionContainer id="#Contact" bg="bg-slate-800" refProps={contactRef}>
        XD
      </SectionContainer>
      <footer ref={footerRef}>XD</footer>
    </div>
  );
}

export default App;
