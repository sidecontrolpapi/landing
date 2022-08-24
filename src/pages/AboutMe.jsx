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
                    &quot;I moved to Miami in early 2021, right after graduating from high school in Havana, Cuba. Since I got to the United States, my main priorities became advancing my Software Engineering career and applying to college. With this in mind, I spent most of my time working as a freelance web developer, participating in hackathons, taking online coding courses, studying for the SAT, and writing application essays.
                </p>
                <p className={`${selected>=0.4?"textShowing":"beforeShow"}`}>
                    Eventually, after successfully developing multiple web apps for small businesses based in Miami and Havana, I landed a full-time position as a developer at Hogarth Worldwide (where I worked from March to August). Also, during that time, I gained admission to a couple of prestigious institutions, including Rice University, where I ultimately decided to attend as part of the class of 2026.
                </p>
                <p className={`${selected>=0.4?"textShowing":"beforeShow"}`}>
                     My tech stack usually consists of a Django Rest Framework API deployed on AWS and a Nextjs client hosted on Vercel. Check out my two favorite projects below.&quot;
                </p>


            </div>

            
            <img id="MidArrow" src={mid} alt=""/>

        </section>
    )
}

export default AboutMe