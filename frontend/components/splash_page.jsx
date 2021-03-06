import React from 'react';
import SplashImages from './splash_images';
import { Link } from 'react-router-dom';
import Footer from './footer';

class SplashPage extends React.PureComponent {
  render () {
    return (
      <div>
        <div className='splash-page'>
          <div className='splash-header'>
            <img src={window.mainImage} />
            <h1>Divide expenses with friends.</h1>
          </div>
          <h2><strong>Share</strong> bills and IOUs. <strong>Make sure</strong> everyone gets paid back. <strong>Totally free</strong> for web, iPhone, and Android.</h2>
          <SplashImages />
          <div>
            <Link to='/signup'>
              <p>Get started now</p>
              <p>(it's free!)</p>
            </Link>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SplashPage;
