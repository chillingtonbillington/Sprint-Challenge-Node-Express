import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/NavBar';
import ProjectsList from './Components/ProjectsList';
import CreateProject from './Components/CreateProject';
import ExpandedProject from './Components/ExpandedProject';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects : [],
      actions : [],
    }
  }

  componentDidMount(){
    this.getProjects();
  }

  getProjects = () =>{
    axios.get('http://localhost:4000/projects')
      .then(res =>{
        this.setState({
          projects : res.data,
        })
      })
      .catch(err =>{
        console.log('Trouble getting projects')
      })
  }

 
  createProject = (newProject) =>{
    axios.post('http://localhost:4000/projects', newProject)
      .then(res =>{
        this.getProjects()
      })
      .catch(err =>{
        console.log('Trouble creating new project')
      })
  }

  deleteProject = (id) =>{
    axios.delete(`http://localhost:4000/projects/${id}`)
      .then(res =>{
        this.getProjects()
      })
      .catch(err =>{
        console.log('Could not delete project with specified ID')
      })
  }

  render() {
    return (
      <div className = 'outer'>
        <div className="App">
            <Route path = '/' component = {NavBar}/>
            <Route exact path = '/' render = {(props) => <ProjectsList  {...props} projects = {this.state.projects} deleteProject = {this.deleteProject}/>}/>
            <Route path = '/:id' render = {(props) => < ExpandedProject {...props} projects = {this.state.projects}/>}/>
            <Route path = '/create' render = {(props) => <CreateProject {...props} projects = {this.state.projects} createProject = {this.createProject}/>}/>
        </div>
      </div> 
    );
  }
}

export default App;
