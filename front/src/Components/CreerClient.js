import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';
import MenuVertical from './MenuVertical';
import axios from 'axios';
import Button from './Button';
import '../styles/formulaire.css';

export class CreerClient extends Component{
    
    state={
        nom:"",
        prenom:"",
        email:"",
        adresse:"",
        cp:"",
        ville:"",
        error:""

    }

   
    handleSubmit(e) {
        e.preventDefault();
        /**let alerte="";*/
        if (this.state.nom != null || this.state.prenom != null) {
          //let regex = new RegExp('([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])');
          //if (regex.test(this.state.startDate) && regex.test(this.state.endDate)) {
            axios.post(`http://localhost:3001/createclient`, {
              nom: this.state.nom,
              prenom: this.state.prenom,
              email: this.state.email,
              adresse: this.state.adresse,
              codepostal: this.state.cp,
              ville: this.state.ville,
            })
              .then((result) => {
                  //this.setState({ error: result.data.message })
                  alert(result);
                
              }).catch((err) => {
                this.setState({ error: err.message })
                console.log(err);
                alert("Error " + this.state.error);
              })
          } else {
            this.setState({ error: "Format invalide" })
            alert("Error " + this.state.error);
    
          }
    
        
    
      }



    render(){
        
    return(
        <>  
        <div id="formulaire">

            <div id="title">
                <h1>Nouveau client</h1>
            </div>
        
            <div id="choix">
                <a>Nom</a>
                <input id="entree" type="text" value={this.state.nom} onChange={(e) => this.setState({ nom: e.target.value })} placeholder="Nom" required></input>
            </div>
            <div id="choix">
                <a>Prénom</a>
                <input id="entree" type="text" value={this.state.prenom} onChange={(e) => this.setState({ prenom: e.target.value })} placeholder="Prenom" required></input>
            </div>
            <div id="choix">
                <a>Email</a>
                <input id="entree" type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} placeholder="Email" required></input>
            </div>
            <div id="choix">
                <a>Adresse</a>
                <input id="entree" type="text" value={this.state.adresse} onChange={(e) => this.setState({ adresse: e.target.value })} placeholder="Adresse" required></input>
            </div>
            <div id="choix">
                <a>Code Postal</a>
                <input id="entree" type="text" value={this.state.cp} onChange={(e) => this.setState({ cp: e.target.value })} placeholder="CP" required></input>
            </div>
            <div id="choix">
                <a>Ville</a>
                <input id="entree" type="text" value={this.state.ville} onChange={(e) => this.setState({ ville: e.target.value })} placeholder="Ville" required></input>
                
            </div>
            <div id="boutons">
                <Button onClick={(e) => this.handleSubmit(e)} width="120px" height="35px" color="lightgreen" fSize="16px" float="right">Créer client</Button> 
            </div>
            
        </div>
                
        </>
    )
    }
}

