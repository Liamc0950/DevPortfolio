import React from 'react';
import Image from "./lightline.gif";

export default class LightLineProject extends React.Component {
    render(){
        return(
          <article id="lightlineProject">
            <div class="card box">
              <a target="_blank" rel="noopener noreferrer"href="https://light-line.herokuapp.com"><img className="card-img-top" src={Image} alt="LightLine"/></a>
              <div class="card-body">
                <header>
                  <h2>LightLine</h2>
                  <h4>Entertainment Lighting Paperwork Management</h4>
                </header>
                <p className="p-card">Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia pellentesque eleifend vitae est elit tristique velit tempus etiam.</p>
              </div>
            </div>
          </article>
        );
      }
    }
    