import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import Pdf from "../Adrian Valdes Diaz's Resume.docx.pdf"

const Links = ({mobile}) => {
    const { selected, handleSelect} = useContext(MenuContext)


    return (
    <>
        <li className="Navlink"><a href={Pdf} download><span>Resume</span></a></li>
        <li  className={`Navlink ${selected>=0.7&&selected<=1.8?"selected":""}`}> <span onClick={()=>handleSelect(1, "Me", mobile)}>About Me</span>  </li>
        <li  className={`Navlink ${selected<4&&selected>1.8?"selected":""}`}> <span onClick={()=>handleSelect(2, "MidArrow", mobile)}>Projects</span></li>
        <li className={`Navlink ${selected>=4?"selected":""}`}> <span onClick={()=>handleSelect(5, "Contact", mobile)}>Contact</span></li> 
    </>
    )
}

export default Links