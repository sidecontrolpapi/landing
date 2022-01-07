import mid from "../images/MidArrow.svg"

const Contact =()=>{
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
                <h1 className="red">Contact:</h1>
                <h1>&#123;</h1>
            </div>
            
            <div className="RightContact">
                <p className="red">char* name, job;</p>
                <div className="variable">
                    <p className="blackFont">name =</p> 
                    <b><p className="red">"Adrián Valdés Diaz"; </p></b>
                </div>
                <div className="variable">
                    <p className="blackFont">job =</p> 
                    <b><p className="red">"Full Stack Developer"; </p></b>
                </div>

                <div className="mainCode">
                    <p className="blackFont">Evaluating (interest);</p><br/>
                    <p className="blackFont">if (interest &#62; 5)&#123;</p>
                    
                    <div className="info">
                        <br/>
                        <a href="call: +17868657264"><b><p className="red">call: +1 786 865-7264;</p></b></a>

                        <a href="mailto: adrianvaldes1439@gmail.com"><b><p className="red">mail: adrianvaldes1439@gmail.com;</p></b></a>
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