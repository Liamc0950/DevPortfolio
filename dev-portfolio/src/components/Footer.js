import React from 'react';


export default class Footer extends React.Component {
    render(){
      return(
        <section id="footer">
          <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-google-plus-g"><span className="label">Google+</span></a></li>
            <li><a href="#" className="icon brands fa-pinterest"><span className="label">Pinterest</span></a></li>
            <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
          </ul>
          <div className="copyright">
            <ul className="menu">
              <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </div>
        </section>
      );
    }
}