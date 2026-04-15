import React from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";


// Componente em classe é uma classe que herda a classe componente do React, e retorna um HTML dentro de um método render
class App extends React.Component {
  // Método Responsável por renderizar o conteúdo HTML do nosso componente
   render(){
    return (
      <>
        <Navbar/>

        <section id="articles">
        <Article title = 'Designing Dashboards'  />
        <Article title = 'Vibrant Portraits of 2020' />
        <Article title = '36 Days of Malayalam type' />
        <Article title = 'Designing Dashboards' />


        </section>

    </>
    )
   }
}

export default App;

