import React from 'react';
import Project from './Project';
import '../css/ProjectsList.css';

class ProjectsList extends React.Component{
    render(){
        return(
            <div className = 'projects-container'>
                {this.props.projects.map(project =>{
                    return(
                        <Project project = {project}/>
                    )
                })}
            </div>
        )
    }
}

export default ProjectsList;