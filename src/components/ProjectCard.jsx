const ProjectCard = ({project})=> {

    return (
    <div className="ProjectCard">

<div className="ImagesDiv">
        <a href={project.link}>
<img src={project.portrait} alt="" />
</a>
<a href={project.link}>
<img src={project.landscape} alt="" />
</a>
</div>

<div className="TextDivv">
    <h2 className="red">{project.title}</h2>
    <p>{project.description}</p>
    <a href={project.link} className="ProjectLink">See it live &#62;</a>
</div>

</div>
    )
}

export default ProjectCard