import React from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import  article1Img from './assets/images/article1.png'
import article2Img from './assets/images/article2.png'
import article3Img from './assets/images/article3.png'
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe componente do React, e retorna um HTML dentro de um método render
class App extends React.Component {
  // Método Responsável por renderizar o conteúdo HTML do nosso componente
   render(){
    return (
      <>
        <Navbar/>

      <Counter/>



        {/* <section id="articles">
        <Article 
        title = 'Designing Dashboards' 
        provider = 'NASA' 
        description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        thumbnail = {article1Img}/>

        <Article 
        title = 'Vibrant Portraits of 2020'  
        provider = 'SpaceNews'
        description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur velit veritatis possimus minima non, nisi, quae assumenda necessitatibus quis iusto! Dolore delectus accusamus provident maiores harum animi. Amet, in?'
        thumbnail = {article2Img}/>



        <Article 
        title = '36 Days of Malayalam type' 
        provider = 'Spaceflight Now'
        description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        thumbnail = {article3Img}/>

        <Article 
          title = 'Designing Dashboards' 
          provider = 'NASA'
          description = 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
          thumbnail = {article1Img}/>
        </section> */}

    </>
    )
   }
}

export default App;

