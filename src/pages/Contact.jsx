import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import mid from "../images/MidArrow.svg"

const Contact =()=>{

    const {selected} = useContext(MenuContext)
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(()=>{
        const width = document.body.clientWidth
        if (width>1920 && selected>=5) setScrolled(true)
        else if (width>=1024 && selected>=4) setScrolled(true)
        else if (selected>=5.2 && width>=375) setScrolled(true)
        else if (selected>=6) setScrolled(true)
        else if (selected<3) setScrolled(false) 
        console.log(selected, document.body.clientWidth)
    },[selected])

    return(
        <div className="Contact" id="Contact">

            <svg className="ContactArr" xmlns="http://www.w3.org/2000/svg" width="959" height="40" viewBox="0 0 959.071 71.757">
                <g id="Group_3" data-name="Group 3" transform="translate(-844.851 1169.203) rotate(-90)">
                <path id="Path_1" data-name="Path 1" d="M1100.981,1160.387l32.343,32.343,32.343-32.343" transform="translate(0 604.121)" fill="none" stroke="#ec0544" stroke-width="15"/>
                <path id="Path_2" data-name="Path 2" d="M1145.328,1116.822v952" transform="translate(-12.004 -271.971)" fill="none" stroke="#ec0544" stroke-width="18"/>
                </g>
            </svg>

            <img id="ContactArrVert" src={mid} alt=""/>

            <div className="CenterContact">
                <div className="container">
                <h1 className={`red beforeType ${scrolled?"typed":""}`}>Contact: </h1>
                </div>
                <h1 className={`${scrolled?"textShowing":"beforeShow"}`}>&#123;</h1>
            </div>
            
            <div  className={`RightContact ${scrolled?"textShowing":"beforeShow"}`}>
             
               

                <div className="mainCode">
                  
                    <p className="blackFont"> <span className="red">if</span> (you.interested(me))&#123;</p>
                    
                    <div className="info">
                        <br/>
                        

                        <a href="mailto: adrianvaldes1439@gmail.com"><b><p className="red"> mail(<u >&quot;adrianvaldes1439@gmail.com&quot;</u>)</p></b></a>
                        <br/>
                    </div>
                    
                    <p className="blackFont">&#125;</p>
                </div>

                <div className="ClosingCurly">
                    <h1>&#125;</h1>
                </div>
            </div>

        </div>
    )
}
export default Contact;