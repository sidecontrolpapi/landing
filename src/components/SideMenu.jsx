import { useContext } from "react"
import { MenuContext} from "../context/MenuContext"
import Links from "./Links"

const SideMenu = ()=> {

    const {sideMenuActive} = useContext(MenuContext)

    return(
        <div id="side" className={`SideMenu ${sideMenuActive?"active":""}`}>
            <ul>
              <span>/&#42;</span>  
               <Links/>
               <span>&#42;/</span>
            </ul>

            <div className="social">
              <img width={50} height={38} src="/RigthArrow.svg" alt="" />
               <a href="https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/"><img  src="/LinkedIn.svg" alt="" /></a> 
                <a href="https://github.com/adiazx14"><img src="/Github.svg" alt="" /></a> 
            </div>
        </div>
    )
}

export default SideMenu