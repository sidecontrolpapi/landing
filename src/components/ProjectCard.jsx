const ProjectCard = ({project})=> {

    return (
        <div className="ProjectCard">

            <div className="ImagesDiv">
                <a target="_blank" rel="noreferrer" href={project.link}>
                <img className="Portrait" src={project.portrait} alt="" />
                </a>
                <a target="_blank" rel="noreferrer" href={project.link}>
                <img id="Landscape" src={project.landscape} alt="" />
                </a>
            </div>

            <div className="TextDiv">
                <h2 className="red">&#47;&#47;{project.title}</h2>
                <div className="InnerText">
                    <p>&quot;{project.description}&quot;</p>
                    
                    <div className="buttons">
                        <a target="_blank" rel="noreferrer" href={project.link} className="ProjectLink">See it live &#62;</a>
                       
                    </div>
                    
                </div>
                
        
            </div>

        </div>
    )
}

export default ProjectCard