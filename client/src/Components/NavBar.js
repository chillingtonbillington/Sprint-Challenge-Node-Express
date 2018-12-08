import React from 'react';
import '../css/NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = (props) =>{
    return(
        <div className = 'nav-bar-container'>
            <h2 className = 'nav-header'>Lambda Projects App</h2>
            <div className = 'button-container'>
                <NavLink exact to = '/'>
                    <button>Home</button>
                </NavLink>
                <NavLink to = '/create'>    
                    <button>Add Project</button>
                </NavLink>    
            </div>
        </div>
    )
}

export default NavBar;