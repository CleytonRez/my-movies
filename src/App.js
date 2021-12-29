import react, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import {
  NavButton,
  NavLink
} from "reactstrap"
import Movies from "./components/Movies";

import NovoFilme from "./components/NovoFilme";

function App() {


  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path='/movies' exact component={Movies} />
            <Route path='/movies/novo' exact component={NovoFilme} />
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
