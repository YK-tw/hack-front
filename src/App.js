import React, { Component } from 'react';
import logo from './logo.svg';
import Page from './Page';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    groups: []
  };

  async componentDidMount() {
    const response = await fetch('/api/text');
    const body = await response.json();
    this.setState({ groups: body, isLoading: false });
  }

  render() {
    const { groups, isLoading } = this.state;

    

    return (
      <div className="App">
      
        <div className="main">
        <div className="text-container">
          <div className="pages">
            <Page pageNumber='1'/>
            <div className="split"></div>
            <Page pageNumber='2'/>
            <div className="split"></div>
            <Page pageNumber='3'/>
            <div className="split"></div>
            <Page pageNumber='4'/>
          </div>
          <h1> 1. Data visualization </h1>
           <p> Recap slides contain large volumes of information, which can make them complex to navigate. Help your audience digest a dense document by creating easily-discernible sections. Think about grouping related text and graphs. It’s also a good idea to include text headers for each section so that someone scanning for just a few seconds will still understand the main points. </p>
            <p>We can use the three sections we defined in our story—annual performance (beginning), quarterly performance (middle), next steps (ending)—to segment the slide. I’ve crafted pithy headlines and created two main columns which group the data and supporting text. For now, I’ve left placeholders for some descriptive insights.</p>
            <p>Notice the distinct sections of the story. Having a clear narrative in mind will help further improve the design of the summary slide.</p>
            <p>Recap slides contain large volumes of information, which can make them complex to navigate. Help your audience digest a dense document by creating easily-discernible sections. Think about grouping related text and graphs. It’s also a good idea to include text headers for each section so that someone scanning for just a few seconds will still understand the main points. </p>
          <div className="buttons">
            <button className="prev">PREV</button>
            <button className="next">NEXT</button>
          </div>
        </div>
        <div className="sidebar">
        Involvement
        </div>
        </div>
      </div>
    );
  }
}

export default App;