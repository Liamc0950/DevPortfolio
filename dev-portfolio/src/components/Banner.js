import React from 'react';


export default class Banner extends React.Component {
    render(){
      return(
        <section id="banner">
          <header>
            <h2>This is Overflow</h2>
          </header>
          <p>A brand new site template designed by <a href="http://twitter.com/ajlkn">AJ</a> for <a href="http://html5up.net">HTML5 UP</a>.<br />
          It’s responsive, built on HTML5/CSS3, and entirely free<br />
          under the <a href="http://html5up.net/license">Creative Commons license</a>.</p>
          <footer>
            <a href="#first" className="button style2 scrolly">Act on this message</a>
          </footer>
        </section>
      );
    }
  }