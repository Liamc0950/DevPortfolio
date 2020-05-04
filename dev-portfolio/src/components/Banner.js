import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
          <ul className="icons">
            <li><a href="https://github.com/Liamc0950"><FontAwesomeIcon icon={['fab', 'github']}/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'pinterest']}/></a></li>
            <li><a href="#"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a></li>
          </ul>
          <footer>
            <Link to="lightlineProject" spy={true} smooth={true} offset={-70} duration= {500} className="button style2"> 
              Check out my projects
            </Link>
          </footer>
        </section>
      );
    }
  }