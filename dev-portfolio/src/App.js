import React from 'react';
import './App.css';


import Header from './components/Header'
import Banner from './components/Banner'
import Feature from './components/Feature';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends React.Component {
  render(){
    return(
        <div>
          <Header></Header>
          <Banner></Banner>
          <Feature></Feature>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
  }
}

export default App;
