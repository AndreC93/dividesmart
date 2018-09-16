import React from 'react';
import { Link } from 'react-router-dom';

const FriendInvitePage = () => {
  return (
    <div>
      <header>DIVIDESMART</header>
      <body>
        <img src={ window.person } />
        <main>
          <h2>[Your name] just invited you to join Dividesmart!</h2>
          <h3>Dividesmart helps you track expenses and IOUs with your friends.</h3>
          <p>“Your optional message here”</p>
          <Link to='/'>Join Dividesmart</Link>
        </main>
      </body>
      <footer>
        <div>
          <p>Copyright © 2018 Dividesmart, all rights reserved.</p>
          <p><a>Click here</a> to unsubscribe from all mail.</p>
        </div>
        <div>
          <p>22 W 38th St, 4th floor</p>
          <p>New York, NY 10018</p>
        </div>
      </footer>
    </div>
  );
};


export default FriendInvitePage;
