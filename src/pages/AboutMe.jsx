import me from "../images/me.webp"
import mid from "../images/MidArrow.svg"

const AboutMe = ()=> {
    return (
        <section id="AboutMe">


            <img id="Me" src={me} alt="" />
           

            <div id="summary">
                <h1 className="red heading">&#47;&#47;About Me</h1>
                <p>
                &quot;I am a proud member of the 46th graduating class of the Vocational Pre-University Institute of Exact Sciences “Vladimir Ilich Lenin” in Havana, Cuba. There I received a high-quality education and met the most intellectually-keen and kind-hearted individuals; With whom I forged life-long bonds of friendship and explored my academic interests, eventually finding my passion for Technology and Programming in particular. 
                </p>
                <p>In my senior year of high school, I gained admission to the prestigious Mathematics and Computer Science Department at the University of Havana. However, in early 2021, I emigrated to the United States before enrolling. Since then, I have been taking multiple online courses in Math and Programming to cope with my impossibility of going to school as a recent immigrant. Right now, I’m applying to colleges in the USA with the hope of finally continuing my education, through which I hope to become the best engineer and person I can be.
                </p>
                <p>Recently, I have been working as a lead developer in a team of freelancers, which produces fully custom web solutions for small businesses. My responsibilities include Project Management; API Development, Database Design, and Deployment Operations in the back-end; and API consuming, UX interactivity, and some CSS styling in the front-end. My main goal with this enterprise is to apply what I learn online and accumulate the necessary experience to land a Coding internship next Spring. Check out our latest projects below.

       
                </p>


            </div>

            
            <img id="MidArrow" src={mid} alt=""/>

        </section>
    )
}

export default AboutMe