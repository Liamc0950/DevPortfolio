import React from 'react';


export default class Banner extends React.Component {
    render(){
      return(
        <section id="banner">
          <header>
            <h2>About</h2>
          </header>
          <p>
              As a soon-to graduate student I am looking for an opportunity to join a challenging and exciting project 
              that will allow me to learn and develop my skills. My experience thus far has largely been on personal 
              projects where I have worked on both front and back-end.
          </p>
          <footer>
            <a href="#first" className="button style2 scrolly">Check out my projects</a>
          </footer>
        </section>
      );
    }
  }