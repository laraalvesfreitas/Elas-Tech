import React from "react";
import articleImg from '../../assets/images/article1.png'
import "./style.css";

/*
this.props = {
    title: 'Exemplo'
}
*/

export class Article extends React.Component{
    render(){
        return(
            <article id="article">
                <img src={articleImg} alt="" id="imgArticle1" />

                <div className="article-infos">

                <h2>{this.props.title}</h2>
                <h3>NASA</h3>

                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                </div>
            </article>

        )
        }
    }
