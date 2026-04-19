import React, { useEffect, useState } from "react";
import './styles/App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios";

// Componente em classe é uma classe que herda a classe componente do React, e retorna um HTML dentro de um método render
  function  App () {
    const [news, setNews] = useState([]);

    useEffect(() => {
      async function loadNews() {
        const response =  await axios.get(
          'https://api.spaceflightnewsapi.net/v4/articles/'
        );

        const newsData = response.data;

        console.log(newsData)
        setNews(newsData.results)
      }
      loadNews()
    }, [])



  // Método Responsável por renderizar o conteúdo HTML do nosso componente
    return (
      <>
        <Navbar/>

      

      {/* <Counter/> */}



         <section id="articles">
          {news.length === 0 ? (
            <div style={{height:'400px', width: '100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
               <ThreeDots
                  height="80"
                  width="80"
                  color="white"
                  ariaLabel="audio-loading"
                  wrapperStyle={{}}
                  wrapperClass="wrapper-class"
                  visible={true}
                  />
                  </div>) : news.map((article) => {
            return(
              <Article 
                article = {article.id}
                title = {article.title} 
                provider = {article.news_site} 
                description = {article.summary}
                thumbnail = {article.image_url}/>
            )
          })}
        

        </section> 

    </>
    )
   }


export default App;




