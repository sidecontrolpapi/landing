import { useContext } from "react"
import { MenuContext} from "../context/MenuContext"
import Links from "./Links"
import Image  from "next/image"

const SideMenu = ()=> {

    const {sideMenuActive} = useContext(MenuContext)

    return(
        <div id="side" className={`SideMenu ${sideMenuActive?"active":""}`}>
            <ul>
              <span>/*</span>  
               <Links/>
               <span>*/</span>
            </ul>

            <div className="social">
              <Image width={50} height={38} src="/RigthArrow.svg" alt="" />
               <a href="https://www.linkedin.com/in/adri%C3%A1n-vald%C3%A9s-d%C3%ADaz-2a10491b7/"><Image width={38} height={40} src="/LinkedIn.svg" alt="" /></a> 
                <a href="https://github.com/adiazx14"><Image width={40} height={37.5} src="/Github.svg" alt="" /></a> 
            </div>
        </div>
    )
}

export default SideMenu