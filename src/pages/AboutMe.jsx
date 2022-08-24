import { useContext } from "react"
import { MenuContext } from "../context/MenuContext"
import me from "../images/me.webp"
import mid from "../images/MidArrow.svg"

const AboutMe = ()=> {

    const {selected} = useContext(MenuContext)

    

    return (
        <section id="AboutMe">


            <img id="Me" className={`Me ${selected>=0.4?"showLeft":""}`} src={me} alt="" />
           

            <div id="summary">
                <div className="container">
                <div className="container">
                <h1 id="AboutMeh1" className={`red beforeType ${selected>=0.4?"typed":""}`}>&#47;&#47;About Me</h1>
                </div>
                </div>
                <p className={`${selected>=0.4?"textShowing":"beforeShow"}`}>
                    &quot;I moved to Miami in early 2021 right after graduating from high school in Havana, Cuba. Since I got to the United States, my main priority became applying to college to continue my education. At the same time, I started working as a freelance web developer and taking free online coding courses to try to advance my software engineering career by gaining some real work experience and certifications while I waited to go back to school.
                </p>
                <p className={`${selected>=0.4?"textShowing":"beforeShow"}`}>
                    Eventually, after having succesfully developed multiple web apps for small businesses in the Miami area, I landed a full-time position as a Front-end developer at Hogarth Worldwide. Some time after that,  I gained admission to a couple of prestigious institutions, including Rice University, where I ultimately decided to attend. 
                </p>
                <p className={`${selected>=0.4?"textShowing":"beforeShow"}`}>
                     My tech stack ussually consists of a Django Rest Framework API deployed on AWS and a Nextjs client hosted on Vercel. Check out my two favorite projects below.

       
                </p>


            </div>

            
            <img id="MidArrow" src={mid} alt=""/>

        </section>
    )
}

export default AboutMe