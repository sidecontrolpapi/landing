import { useContext } from "react"
import { MenuContext} from "../context/MenuContext"
import Links from "./Links"
import linkedin from "../images/LinkedIn.svg"
import github from "../images/Github.svg"
import right from "../images/RightArrow.svg"

const SideMenu = ()=> {

    const {sideMenuActive} = useContext(MenuContext)

    return(
        <div id="side" className={`SideMenu ${sideMenuActive?"active":""}`}>
            <ul>
              <span>/&#42;</span>  
               <Links mobile={true}/>
               <span>&#42;/</span>
            </ul>

            <div className="social">
              <img width={50} height={38} src={right} alt="" />
               <a href="https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/"><img  src={linkedin} alt="" /></a> 
                <a href="https://github.com/adiazx14"><img src={github} alt="" /></a> 
            </div>
        </div>
    )
}

export default SideMenu