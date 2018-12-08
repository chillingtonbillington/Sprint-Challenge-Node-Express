import React from 'react';

import '../css/Project.css';

const Project = (props) =>{
    return(
        <div className = 'project-container'>
            <h4 className = 'project-header'>{props.project.name}</h4>
            <div className = 'project-description-container'>
                <p className = 'project-description'>{props.project.description}</p>
            </div>    
        </div>
    )
}

export default Project;