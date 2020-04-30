import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import { Link, animateScroll as scroll } from "react-scroll";

import Tree from './Tree';

export default class Header extends React.Component {
    render(){
      return(
        <section id="header">
          <header>
            <h1>Liam Corley</h1>
            <p>Web Developer</p>
          </header>
          <Tree></Tree>
          <footer>
            <Link to="banner" activeClass="active" spy={true} smooth={true} offset={-70} duration= {750} className="button style2"> 
            About Me
            </Link>
          </footer>
        </section>
      );
    }
  }
  