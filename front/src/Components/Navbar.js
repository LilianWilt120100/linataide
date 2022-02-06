import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/Navbar.css';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";
import logo from '../assets/logo.png';
import Button from './Button';

export class Navbar extends Component{
    render(){
    return(
        <>
        <div id="topnavbar">
            <Link to="/#" ><img src={logo} alt="logo" /></Link>
            <div id="topnavbar_links">
        
            <Button onClick={(e) => console.log(e)} width="120px" height="35px" color="lightgreen" fSize="16px" float="right">Test</Button> 
            </div>
        </div>
        </>
    )
    }

}

