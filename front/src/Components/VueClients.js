import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Navbar } from './Navbar';
import MenuVertical from './MenuVertical';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from './Button';

export class VueClient extends Component{
    
    state={
        tabClients:[],
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


    suppClient(id){
      axios.delete(`http://localhost:3001/deleteclient/`+id)
          .then((result) => {
            alert("Client "+ id + " supprimé")
          }).catch((err) => {
            console.log(err)
          });

          window.location.reload(false);
    
    }

    render(){
        
    return(
        <>  
        
            <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{color: "blue", fontSize:"14px"}}>ID</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Nom</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Prenom</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Email</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Ville</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Adresse</TableCell>
                    <TableCell align="right" style={{color: "blue", fontSize:"14px"}}>Supprimer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.tabClients.map((client) => (
                  <TableRow key={client.idClient} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell component="th" scope="row">{client.idClient}</TableCell>
                    <TableCell align="right">{client.nom}</TableCell>
                    <TableCell align="right">{client.prenom}</TableCell>
                    <TableCell align="right">{client.email}</TableCell>
                    <TableCell align="right">{client.ville}</TableCell>
                    <TableCell align="right">{client.adresse}</TableCell>
                    <TableCell align="right"><Button onClick={(e) => this.suppClient(client.idClient)} width="120px" height="35px" color="red" fSize="16px" float="right">Supprimer</Button>  </TableCell>

                    </TableRow>

                  ))}
                  


                </TableBody>
              </Table>
            </TableContainer>
            </div>
                
        </>
    )
    }
}

