import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';
import MenuVertical from './MenuVertical';

export class Accueil extends Component{
    
    render(){
        
    return(
        <>  
            
                <div id="left">
                <MenuVertical />
                </div>
            
        </>
    )
    }
}

