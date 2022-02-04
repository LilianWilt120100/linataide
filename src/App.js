import logo from './logo.svg';
import { Accueil } from './Components/Accueil.js';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';

function App() {
  return (
    <Router>
      <div>
        

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path='/' element={<Accueil />} />
        </Switch>
        
       
      </div>
      
      
    </Router>
    
  );

}

export default App;
