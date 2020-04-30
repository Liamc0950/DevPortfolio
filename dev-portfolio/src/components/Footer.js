import React from 'react';


export default class Footer extends React.Component {
    render(){
      return(
        <section id="footer">
          <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon brands fa-pinterest"><span className="label">Pinterest</span></a></li>
            <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          </ul>
          <div className="copyright">
            <ul className="menu">
              <li>&copy; Liam Corley. All rights reserved.</li>
            </ul>
          </div>
        </section>
      );
    }
}