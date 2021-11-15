import { useState } from "react"

const Navbar = ()=> {

const [isSelected, setIsSelected] = useState(0)

const handleSelect = (num) => {
setIsSelected(num)
}
    return(
        <nav>
            <ul>
            <li>Adrián Valdés Díaz</li>
           <li onClick={()=>handleSelect(0)} className={`Navlink ${isSelected==0?"selected":""}`}>About Me</li>
           <li onClick={()=>handleSelect(1)} className={`Navlink ${isSelected==1?"selected":""}`}>Projects</li>
           <li onClick={()=>handleSelect(2)} className={`Navlink ${isSelected==2?"selected":""}`}>Contact</li> 
            </ul> 
        </nav>
    )
}

export default Navbar