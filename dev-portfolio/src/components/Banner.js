import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


export default class Banner extends React.Component {
    render(){
      return(
        <section id="banner">
          <header>
            <h2>About</h2>
          </header>
          <p>
              As a soon-to graduate student I am looking for an opportunity to join a challenging and exciting project 
              that will allow me to learn and develop my skills. 
          </p>
          https://github.com/Liamc0950
          <footer>
            <Link to="lightlineProject" activeClass="active" spy={true} smooth={true} offset={-70} duration= {500} className="button style2"> 
              Check out my projects
            </Link>
          </footer>
        </section>
      );
    }
  }