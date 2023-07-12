import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App/index.js';
import './index.css';

function App(props) {
  return (
    <h1>¡{props.saludo}, {props.nombre}!</h1>
  )
}

function withCualquierCosa(WrappedComponent) {
  return function ComponenteDeVerdad(props) {
    return (
      <>
        <WrappedComponent {...props} />
        <p>Estamos acompañando al WrappedComponent</p>
      </>
    )
  }
}

const AppWithCualquierCosa = withCualquierCosa(App)

ReactDOM.render(
  <AppWithCualquierCosa saludo="Hey" nombre="Nath" />,
  // <App saludo="Buenas" nombre="Nath"/>,
  document.getElementById('root')
);
