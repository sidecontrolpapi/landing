import Head from 'next/head'

import { Component } from 'react'
import AboutMe from '../components/AboutMe'
import Hello from '../components/Hello'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import MenuContextProvider from '../context/MenuContext'

class Home extends Component {
 
render() {
  
  
  return (
    <div>
      <Head >
        <title>Adrián Valdés Díaz</title>
        <meta name="description" content="I am a self-taught full-stack developer and future Computer Science student" />
        <meta name="keywords" content="Computer Science, Web Development, Freelancing"/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuContextProvider>
      <Navbar/>
      <div id="App">
      <SideMenu/>
      <Hello/>
      <AboutMe/>
      </div>
      </MenuContextProvider>
    </div >
  )
}
}

export default Home