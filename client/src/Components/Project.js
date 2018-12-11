import React from 'react';
import {Link} from 'react-router-dom';

import '../css/Project.css';

const Project = (props) =>{
    return(
         <div className = 'project-container'>
            <div className = 'deleter' onClick = {() => props.deleteProject(props.project.id)}>X</div>
            <Link to = {`/${props.project.id}`}>     
                <h4 className = 'project-header'>{props.project.name}</h4>
            </Link>  
            <div className = 'project-description-container'>
                <p className = 'project-description'>{props.project.description}</p>
            </div>    
        </div>
        
    )
}

export default Project;