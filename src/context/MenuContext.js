import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const MenuContext = createContext()

const MenuContextProvider = (props)=> {


    const [sideMenuActive, setSideMenuActive] = useState(false)
    const [scrolled, setScrolled] = useState(0)
    const [selected, setSelected] = useState(0)


 
  const listenToScroll = ()=> {


      setSelected(Math.round(window.scrollY/window.innerHeight))
      if (selected>scrolled) setScrolled(selected)

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

    
    return <MenuContext.Provider value={{sideMenuActive, setSideMenuActive, selected,handleSelect, scrolled, setScrolled }}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuContextProvider