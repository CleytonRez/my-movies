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

import NovoFilme from "./components/NovoFilme";

function App() {


  return (
    <div className="App">
      <div className="container">

        <h1>My Movies</h1>
        <button className="btn btn-confirm">Adicionar Filme</button>
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Gênero</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Vingadores</td>
              <td>Aventura</td>
              <button className="btn btn-danger">X</button>
            </tr>
          </tbody>
        </table>

        <NovoFilme />

      </div>
    </div >
  );
}

export default App;
