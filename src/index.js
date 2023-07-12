import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props) {
  return (
    <h1>¡{props.saludo}, {props.nombre}!</h1>
  )
}

function withSaludo(saludo) {
  return function WrappedComponentConSaludo(WrappedComponent){
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      )
    }
  }
}

const AppWithSaludo = withSaludo('Hola')(App)

ReactDOM.render(
  <AppWithSaludo  nombre="Nath" />,
  // <App saludo="Buenas" nombre="Nath"/>,
  document.getElementById('root')
);
