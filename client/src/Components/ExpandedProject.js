import React from 'react';
import axios from 'axios';

class ExpandedProject extends React.Component{
    constructor(){
        super()
        this.state = {
            projects : [],
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id;
        this.getProjectById(id);
    }
    getProjectById = (id) =>{
        axios.get(`http://localhost:4000/projects/${id}`)
        .then(res =>{
            this.setState({
                projects : res.data
            })
        })
        .catch(err =>{
            console.log('Could not get note with specified ID')
        })
    }
    render(){
        return(
            <div className = 'expanded-project-container'>
                <div>{this.props.projects.name}</div>
                <div>{this.props.projects.description}</div>

            </div>
        )
    }
}

export default ExpandedProject;