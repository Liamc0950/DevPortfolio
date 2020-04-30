import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import Sketch from './Sketch';

export default class Header extends React.Component {
    render(){
      return(
        <P5Wrapper sketch={Sketch} color="red" class="tree"></P5Wrapper>
      );
    }
  }
  