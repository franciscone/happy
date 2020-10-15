import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// COMPONENTES SÃO FUNÇÕES QUE RETORNAM HTML

// Método que pega o elemento do App.tsx e passa para o root do index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

