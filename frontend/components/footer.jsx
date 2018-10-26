import React from 'react';

class Footer extends React.PureComponent {
  render () {
    return (
      <div className='footer-wrapper'>
        <div className='footer'>
          <main>
            <h1>Made with &#x1F60E; in New York City, NY, USA</h1>
            <h2>Copyright © 2018 Dividesmart, Inc. All rights reserved.</h2>
          </main>

          <ul>
            <li><a href='https://www.andrechow.com/' >About</a> | </li>
            <li><a href='https://www.linkedin.com/in/andre-chow/' >LinkedIn</a> | </li>
            <li><a href='https://github.com/AndreC93' >Github</a> | </li>
            <li><a href='mailto:andrechow93@gmail.com' >Contact Me</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
