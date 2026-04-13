import React from "react";
import './styles/App.css'
import Navbar from "./components/Navbar/Navbar";

// Componente em classe é uma classe que herda a classe componente do React, e retorna um HTML dentro de um método render
class App extends React.Component {
  // Método Responsável por renderizar o conteúdo HTML do nosso componente
   render(){
    return <Navbar/>;
   }
}

export default App;

