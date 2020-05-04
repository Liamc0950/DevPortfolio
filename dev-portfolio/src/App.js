import React from 'react';
import './App.css';


import Header from './components/Header'
import Banner from './components/Banner'
import LightLineProject from './components/LightLineProject';
import PortfolioProject from './components/PortfolioProject';
import Contact from './components/Contact';
import Footer from './components/Footer';

//FONT AWESOME
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)
class App extends React.Component {
  render(){
    return(
        <div>
          <Header></Header>
          <Banner></Banner>
          <LightLineProject></LightLineProject>
          <PortfolioProject></PortfolioProject>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
