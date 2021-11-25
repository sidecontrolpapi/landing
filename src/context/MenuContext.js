import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext()

const MenuContextProvider = (props)=> {


    const [sideMenuActive, setSideMenuActive] = useState(false)
    const [selected, setSelected] = useState(0)

    const [scrolled, setScrolled] = useState(0)

  const listenToScroll = ()=> {
    document.querySelector("nav").classList.remove("show")
     document.querySelector("nav").classList.add("show")
     
     if (window.scrollY>document.getElementById("Welcome").scrollHeight) {setSelected(1);}
     else setSelected(0)
  }

  useEffect(()=>{
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll);
  };
  },[])


    const handleSelect = (num, url, mobile)=> {
        setSelected(num)
         setSideMenuActive(false)
         document.body.style.overflow="auto";
       if (mobile) setTimeout(()=>{document.getElementById(url).scrollIntoView()},1000)
       else document.getElementById(url).scrollIntoView()

    }

    
    return <MenuContext.Provider value={{sideMenuActive, setSideMenuActive, selected,handleSelect }}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuContextProvider