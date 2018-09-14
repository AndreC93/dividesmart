import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
          <main>
            <h1>Made with ☻ in Providence, RI, USA</h1>
            <h2>Copyright © 2018 Splitwise, Inc. All rights reserved.</h2>
          </main>

          <ul>
            <li>About | </li>
            <li>Jobs | </li>
            <li>Calculators | </li>
            <li>Blog | </li>
            <li>Terms | </li>
            <li>Press | </li>
            <li>API | </li>
            <li>Contact us</li>
          </ul>
      </div>
    );
  }
}

export default Footer;
