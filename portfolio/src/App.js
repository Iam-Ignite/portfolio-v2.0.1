import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AllSections from './components/AllSections/sections';
import Footer from './components/footer/Footer';
import { useTheme } from './components/hooks/useModeTheme';
import Experiences from './components/footer/Experience';
import LoadingPage from './components/LoadingPage/loadPage';




function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 250)

  }, [])


  const { mode } = useTheme()

  return (
    <>
    {loading ? <LoadingPage/> :
     <div className={`app ${mode}`}>
     <NavBar />
     <Home />
     <AllSections />
     <Experiences />
     <Footer />
   </div>}
    </>
   
  );
}

export default App;
