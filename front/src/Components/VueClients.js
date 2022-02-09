import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';
import MenuVertical from './MenuVertical';
import axios from 'axios';

export class VueClient extends Component{
    
    state={
        tabClients:[]
    }

    componentDidMount() { //Recupere les données 

        axios.get(`http://localhost:3001/clients`)
          .then((result) => {
            this.setState({ tabClients: result.data });
            console.log(this.state.tabClients)
          }).catch((err) => {
            console.log(err)
          });
    
      }

    render(){
        
    return(
        <>  
        
            <div>
                
            </div>
            
        </>
    )
    }
}

