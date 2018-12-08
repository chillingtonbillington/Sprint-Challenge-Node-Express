import React from 'react';

const Project = (props) =>{
    return(
        <div className = 'project-container'>
            <h4>{props.project.name}</h4>
            <p>{props.project.description}</p>
        </div>
    )
}

export default Project;