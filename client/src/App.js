import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import axios from 'axios';

import NavBar from './Components/NavBar';
import ProjectsList from './Components/ProjectsList';

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
  }
  render() {
    return (
      <div className="App">
          <Route path = '/' component = {NavBar}/>
          <Route exact path = '/' render = {(props) => <ProjectsList  {...props} projects = {this.state.projects}/>}/>
      </div>
    );
  }
}

export default App;
