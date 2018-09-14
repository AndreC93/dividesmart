import React from 'react';

const SplashImages = (props) => {
  return (
    <div className='splash-images'>
      <img src={ window.iphone } />
      <img id='first-img' src={ window.dashboard } />
    </div>
  );
};

export default SplashImages;
