import { stringify } from 'querystring';
import React from 'react';

// JSX - JavaScript XML (Forma de Incluiir HTML em JS)

// *CORE DO REACT, COMPONENTES E PROPRIEDADES*
interface TitleProps {
  text: string;
}


function Title(props: TitleProps){
  return (
    <h1>{props.text}</h1>
  )
}


function App() {
  return (
    <div className="App">
      <Title text = "Titulo 1" />
      <Title text = "Titulo 2" />
      <Title text = "Titulo 3" />
      <Title text = "Titulo 4" />
    </div>
  );
}

export default App;
