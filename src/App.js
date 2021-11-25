import AboutMe from './pages/AboutMe';
import Hello from './pages/Hello';
import MenuContextProvider from './context/MenuContext'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu';
import './styles/App.css'
import './styles/media queries.css'
import './styles/mobile.css'


function App() {

  
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
