import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/Navbar.css';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";


  //
  //  Parameters :
  //  href : Url
  //  Scolor : borderbottom color
  //  color : color of the background
  //  fSize : font size of text
  //  height : height of the button
  //  width : width of the button
  // 

export default class Button extends Component{
    render(){
    return(
        <>
            <a onClick={this.props.onClick} href={this.props.href} style={{ userSelect: "none", cursor: "pointer", float: this.props.float, borderBottom: `3px solid ${this.props.Scolor}`, fontSize: this.props.fSize, width: this.props.width, height: this.props.height, backgroundColor: this.props.color, display: 'flex', alignItems: "center", justifyContent: 'center', borderRadius: "3px 3px 5px 5px", color: "white", textShadow: "1px 1px 1px rgba(0,0,0,.35)", textDecoration: 'none' }}>
                {this.props.children}
            </a>       
       </>
    )
    }
}

