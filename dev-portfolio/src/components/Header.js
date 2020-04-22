import React from 'react';


export default class Header extends React.Component {
    render(){
      return(
        <section id="header">
          <header>
            <h1>Liam Corley</h1>
            <p>Web Developer</p>
          </header>
          <footer>
            <a href="#banner" className="button style2 scrolly-middle">About Me</a>
          </footer>
        </section>
      );
    }
  }
  