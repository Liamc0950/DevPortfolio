import React from 'react';


export default class Contact extends React.Component {
    render(){
      return(
        <article className="container box style3">
          <header>
            <h2>Contact Me</h2>
            <p>Send me an email and get in touch</p>
          </header>
          <form method="post" action="#">
            <div className="row gtr-50">
              <div className="col-6 col-12-mobile"><input type="text" className="text" name="name" placeholder="Name" /></div>
              <div className="col-6 col-12-mobile"><input type="text" className="text" name="email" placeholder="Email" /></div>
              <div className="col-12">
                <textarea name="message" placeholder="Message"></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </div>
            </div>
          </form>
        </article>
      );
    }
  }
  
  