import { useContext } from "react"
import ProjectCard from "../components/ProjectCard"
import { MenuContext } from "../context/MenuContext"
import projects from "../temporalProjectsJSON"

const Projects = ()=> {

    const {selected} = useContext(MenuContext)

    return (
        <section id="Projects">
            <div className="container">
            <h1 className={`red beforeType ${selected>=2?"typed":""}`}>&#47;&#47;Projects</h1>
            </div>
            {projects.sort((a,b)=>a.id<b.id?-1:1).map(project=><ProjectCard key={project.id} project={project}/>)}
        </section>
    )
}

export default Projects