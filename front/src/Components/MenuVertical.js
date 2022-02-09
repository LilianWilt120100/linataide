import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuVertical extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  

  goToTestPage(e) {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/test';
  }

  goToVueClient(e) {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/clients';
  }

  render() {
    const { activeItem } = this.state
    const styleLink = document.createElement("link");
    styleLink.rel = "stylesheet";
    styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
    document.head.appendChild(styleLink);
    
    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Calendrier</Menu.Header>

          <Menu.Menu>
          <Menu.Item
              name='Rendez-vous'
              active={activeItem === 'Rendez-vous'}
              onClick={this.handleItemClick}
            >
            Rendez-vous            
          </Menu.Item>
            
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Clients</Menu.Header>

          <Menu.Menu>
          <Menu.Item
              name='Créer un client'
              active={activeItem === 'Créer un client'}
              onClick={this.handleItemClick}
            >
            Créer un client           
          </Menu.Item>
            <Menu.Item
              name='Voir les clients'
              active={activeItem === 'Voir les clients'}
              onClick={(e)=>this.goToVueClient(e)}
            >
              Voir les clients
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Factures</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Voir les factures'
              active={activeItem === 'Voir les factures'}
              onClick={this.handleItemClick}
            >
              Voir les factures
            </Menu.Item>
            <Menu.Item
              name='Créer une facture'
              active={activeItem === 'Créer une facture'}
              onClick={this.handleItemClick}
            >
              Créer une facture
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Documents</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Test'
              active={activeItem === 'Test'}
              onClick={(e)=>this.goToTestPage(e)}
            >
              Test
            </Menu.Item>

            
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}