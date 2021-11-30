import ProjectCard from "../components/ProjectCard"
import projects from "../temporalProjectsJSON"

const Projects = ()=> {
    return (
        <section id="Projects">
            <h1 className="red">&#47;&#47;Projects</h1>
            {projects.map(project=><ProjectCard key={project.id} project={project}/>)}
        </section>
    )
}

export default Projects