import { useEffect } from "react"
import ProjectCard from "../components/ProjectCard"
import projects from "../temporalProjectsJSON"

const Projects = ()=> {

    useEffect(()=>{console.log(projects.sort((a,b)=>a.id<b.id?-1:1))},[])
    return (
        <section id="Projects">
            <h1 className="red">&#47;&#47;Projects</h1>
            {projects.sort((a,b)=>a.id<b.id?-1:1).map(project=><ProjectCard key={project.id} project={project}/>)}
        </section>
    )
}

export default Projects