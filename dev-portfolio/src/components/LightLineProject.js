import React from 'react';
import Img from './lightlineIMG.png';

export default class LightLineProject extends React.Component {
    render(){
        return(
          <article id="lightlineProject" className="container box style1 right">
            <a href="#" className="image fit"><img src={Img} alt="LightLine" /></a>
            <div className="inner">
              <header>
                <h2>LightLine</h2><br />
                <h4>Entertainment Lighting Paperwork Management</h4>
              </header>
              <p>Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
            </div>
          </article>
        );
      }
    }
    