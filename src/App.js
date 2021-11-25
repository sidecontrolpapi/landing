import AboutMe from './pages/AboutMe';
import Hello from './pages/Hello';
import MenuContextProvider from './context/MenuContext'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu';
import './styles/App.css'
import './styles/media queries.css'
import './styles/mobile.css'
import { useEffect, useState } from 'react';


function App() {

  const [scrolled, setScrolled] = useState(0)

  const listenToScroll = ()=> {
     setScrolled(window.scrollY)
     console.log(scrolled)
  }

  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll);
  };
  },[])

  return (
    <div id="App">
      <MenuContextProvider>
      <Navbar />
      
      <SideMenu/>
      <Hello/>
      <AboutMe/>
     
      </MenuContextProvider>
    </div>
  );
}

export default App;
