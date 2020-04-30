import React from 'react';
import './App.css';


import Header from './components/Header'
import Banner from './components/Banner'
import LightLineProject from './components/LightLineProject';
import PortfolioProject from './components/PortfolioProject';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends React.Component {
  render(){
    return(
        <div>
          <Header></Header>
          <Banner></Banner>
          <LightLineProject></LightLineProject>
          <PortfolioProject></PortfolioProject>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
