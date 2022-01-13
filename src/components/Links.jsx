import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"

const Links = ({mobile}) => {
    const { selected, handleSelect} = useContext(MenuContext)


    return (
    <>
     <li  className={`Navlink ${selected===1?"selected":""}`}> <span onClick={()=>handleSelect(1, "AboutMeh1", mobile)}>About Me</span>  </li>
           <li  className={`Navlink ${selected<5&&selected>1?"selected":""}`}> <span onClick={()=>handleSelect(2, "Projects", mobile)}>Projects</span></li>
           <li className={`Navlink ${selected>=5?"selected":""}`}> <span onClick={()=>handleSelect(5, "Contact", mobile)}>Contact</span> </li> 
    </>
    )
}

export default Links