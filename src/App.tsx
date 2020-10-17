import React from 'react';

import './styles/global.css';

import 'leaflet/dist/leaflet.css'

import Routes from './routes'

// JSX - JavaScript XML (Forma de Incluiir HTML em JS)

// *CORE DO REACT, COMPONENTES E PROPRIEDADES*
// interface TitleProps {
//   text: string;
// }


// function Title(props: TitleProps){
//   return (
//     <h1>{props.text}</h1>
//   )
// }


// function App() {
//   return (
//     <div className="App">
//       <Title text = "Titulo 1" />
//       <Title text = "Titulo 2" />
//       <Title text = "Titulo 3" />
//       <Title text = "Titulo 4" />
//     </div>
//   );
// }

function App() {
  return (
    <Routes />
  );
}

export default App;


// AS 3 COISAS MAIS IMPORTANTES EM REACT: COMPONENTE , ESTADO E PROPRIEDADES
// ESTADO: QUALQUER TIPO DE INFORMAÇÃO QUE EU QUEIRA ARMAZENAR E MANIPULAR NO MEU COMPONENTE