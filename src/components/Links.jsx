import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

const Links = ({mobile}) => {
    const { selected, handleSelect} = useContext(MenuContext)


    return (
    <>
     <li  className={`Navlink ${selected===1?"selected":""}`}> <span onClick={()=>handleSelect(1, "AboutMe", mobile)}>About Me</span>  </li>
           <li  className={`Navlink ${selected===2?"selected":""}`}> <span onClick={()=>handleSelect(2, "#Welcome", mobile)}>Projects</span></li>
           <li className={`Navlink ${selected===3?"selected":""}`}> <span onClick={()=>handleSelect(3, "#Welcome", mobile)}>Contact</span> </li> 
    </>
    )
}

export default Links