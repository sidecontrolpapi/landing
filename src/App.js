import AboutMe from './pages/AboutMe';
import Hello from './pages/Hello';
import MenuContextProvider from './context/MenuContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu';
import './styles/App.css'
import './styles/media queries.css'
import './styles/mobile.css'
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {

  
  return (
    <div id="App">
      <MenuContextProvider>
      <Navbar />
      
      <SideMenu/>
      <Hello/>
      <AboutMe/>
      <Projects/>
      <Contact />
      <Footer />
      
      </MenuContextProvider>
    </div>
  );
}

export default App;
