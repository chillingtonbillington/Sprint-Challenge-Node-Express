import React from 'react';
import {Link} from 'react-router-dom';

import '../css/CreateProject.css';



class CreateProject extends React.Component{
    constructor(){
        super()
        this.state = {
            name : '',
            description : ''
        }
        
    }
    componentDidMount(){
        this.setState({
            name: this.props.projects.name,
            description: this.props.projects.description
        })
    }

    inputHandler = (event) =>{
        this.setState({[event.target.name] : event.target.value})
    }

    submitHandler = (event) =>{
        event.preventDefault()
        this.props.createProject(this.state)
        this.setState({
            name : '',
            description: '',
        })
    }

    render(){
        return(
            <div className = 'create-project-container'>
                <form className = 'create-form' onSubmit = {this.submitHandler}>
                    <h4 className = 'project-header'>Create New Project</h4>
                    <input
                        className = 'project-name-field'
                        placeholder = 'Add new project name...'
                        type = 'text'
                        onChange = {this.inputHandler}
                        name = 'name'
                        value = {this.state.name}
                    />
                    <input
                        className = 'project-desription-field'
                        placeholder = 'Add new project description...'
                        type = 'text'
                        onChange = {this.inputHandler}
                        name = 'description'
                        value ={this.state.description}
                    />
                    <Link exact to ='/' className = 'create-button'>
                        <button type = 'submit' >
                            Submit
                        </button>
                    </Link>    
                </form>

            </div>
        )
    }
}

export default CreateProject;