import { createContext, useState } from "react";

export const MenuContext = createContext()

const MenuContextProvider = (props)=> {


    const [sideMenuActive, setSideMenuActive] = useState(false)
    const [selected, setSelected] = useState(0)

    const handleSelect = (num, url)=> {
        setSelected(num)
         setSideMenuActive(false)
         document.body.style.overflow="auto";
        setTimeout(()=>{window.location.href=url}, 1000) 

    }

    
    return <MenuContext.Provider value={{sideMenuActive, setSideMenuActive, selected,handleSelect }}>
        {props.children}
    </MenuContext.Provider>
}

export default MenuContextProvider