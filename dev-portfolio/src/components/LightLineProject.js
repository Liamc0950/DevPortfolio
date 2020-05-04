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
                <ul className="p-card">
                  <li>Paperwork management web app for entertainment lighting designers</li>
                  <li>CRUD application built on Django with PostgreSQL database</li>
                  <li>User Authentication and data sharing feature</li>
                  <li>Deployed to Heroku</li><br/>
                </ul>
              </div>
            </div>
          </article>
        );
      }
    }
    