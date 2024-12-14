import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';
import Language from './components/language/Language'; 
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setOpen(true);
    }
  }, []);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      {/* <Footer/> */}
    </>
  );
}

export default App;
