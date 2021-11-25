import { useContext} from "react"
import { MenuContext } from "../context/MenuContext"
import Links from "./Links"

const Navbar = ()=> {

const {sideMenuActive, setSideMenuActive} = useContext(MenuContext)


const toggleActive = ()=> {
    if (sideMenuActive) {setSideMenuActive(false);
        document.body.style.overflow="auto";
        
    
    }
    else {setSideMenuActive(true); 
        document.body.style.overflow="hidden";
        
}
}

    return(
        <nav >
            <ul className={sideMenuActive?"nav-active":""}>
                <li  onClick={()=>{toggleActive()}}>
                   <div className={`hamline ${sideMenuActive?"ham-active":""}`} id="line-1"></div><div className={`hamline ${sideMenuActive?"ham-active":""}`} id="line-2"></div><div className={`hamline ${sideMenuActive?"ham-active":""}`} id="line-3"></div>
                </li>
            <li>Adrián Valdés Díaz</li>
          <Links mobile={false}/>
            </ul> 
        </nav>
    )
}

export default Navbar