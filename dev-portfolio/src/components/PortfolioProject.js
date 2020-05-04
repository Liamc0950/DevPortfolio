import React from 'react';
import Image from "./portfolio.gif";


export default class PortfolioProject extends React.Component {
    render(){
        return(
          <article id="lightlineProject">
          <div class="card box">
            <a target="_blank" rel="noopener noreferrer"href="https://liam-corley-design.herokuapp.com/"><img className="card-img-top" src={Image} alt="LightLine"/></a>
            <div class="card-body">
              <header>
                <h2>Portfolio Platform</h2>
                <h4>Entertainment Designer Portfolio Platform</h4>
              </header>
              <ul className="p-card">
                  <li>A portfolio template with CMS targeted towards theatre and entertainment designers</li>
                  <li>Admin page providing CMS features such as adding portfolio items, uploading images, editing text content, etc.</li>
                  <li>Deployed to Heroku with AWS S3 buckets for media storage.</li><br/>
              </ul>
            </div>
          </div>
        </article>
        );
      }
    }