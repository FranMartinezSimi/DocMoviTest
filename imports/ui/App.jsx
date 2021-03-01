import React from 'react';
import { Formulario } from './Formulario.jsx';
import { Listado } from './Listado'

export const App = () => (
  <div className="container-fluid">
    <div className="row blue">
      <div className="col l8 s12  offset-l2 card-content valign center ">
        <h1
          className="white-text"
        >Prueba Tecnica juan martinez</h1>
      </div>
    </div>
    <div className="row">
      <div className="col s12 l6">
        <Formulario />
      </div>
      <div className="col s12 l6">
        <Listado />
      </div>
    </div>
  </div>
);
