import Head from 'next/head'
import Image from 'next/image'
import { Component, useEffect, useLayoutEffect, useRef } from 'react'
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
        <meta name="description" content="Adrian Valdes Diaz is a self-taught Full-Stack Developer" />
        <meta name="keywords" content="Computer Science, Web Development, Freelancing"/>
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MenuContextProvider>
      <Navbar/>
      <div id="App">
      <SideMenu/>
      <Hello/>
      </div>
      </MenuContextProvider>
    </div >
  )
}
}

export default Home