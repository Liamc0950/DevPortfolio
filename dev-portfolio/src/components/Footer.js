import React from 'react';


export default class Footer extends React.Component {
    render(){
      return(
        <section id="footer">
          <div className="copyright">
            <ul className="menu">
              <li>&copy; Liam Corley. All rights reserved.</li>
            </ul>
          </div>
        </section>
      );
    }
}