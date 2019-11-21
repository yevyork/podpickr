import React, { Component } from "react";
import Axios from "axios";
import "../styles/Widget.css";

const token = process.env.REACT_APP_NEWS_TOKEN;

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nespressoNews: []
    };
  }
  componentDidMount() {
    this.fetchNews();
  }
  fetchNews = async () => {
    const news = await Axios.get(
      `https://newsapi.org/v2/everything?q=nespresso&apiKey=${token}`
    );
    this.setState({ nespressoNews: news.data.articles });
    console.log(this.state.nespressoNews);
  };


  render() {
    const renderNews = this.state.nespressoNews.map((article, i) => (
      
      <div key={i}>
        <a className='news-title' href={article.url}>{article.title}</a>
        <br></br><br></br>
      </div>
    ));
    return (
    <div className="widget-container">
      <h1 className='widget-heading'>Nespresso News</h1>
      <div className='news'>{renderNews}</div>
    </div>
    )}
}

export default Widget;
