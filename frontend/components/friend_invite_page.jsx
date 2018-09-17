import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearAllModals } from '../actions/modal_actions';

class FriendInvitePage extends React.Component {
  componentDidMount() {
    this.props.clearAllModals();
  }

  render() {
    return (
      <div className='friend-invite-page'>
        <header><div>DIVIDESMART</div></header>
        <h1>
          <img src={ window.person } />
          <main>
            <h2><strong>[Your name]</strong> just invited you to join Dividesmart!</h2>
            <h3>Dividesmart helps you track expenses and IOUs with your friends.</h3>
            <p>“Your optional message here”</p>
            <Link to='/'>Join Dividesmart</Link>
          </main>
        </h1>
        <footer>
          <div>
            <p>Copyright © 2018 Dividesmart, all rights reserved.</p>
            <p><Link to='/'>Click here</Link> to unsubscribe from all mail.</p>
          </div>
          <div>
            <p>22 W 38th St, 4th floor</p>
            <p>New York, NY 10018</p>
          </div>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  clearAllModals: () => dispatch(clearAllModals()),
});

export default connect(null, mapDispatchToProps)(FriendInvitePage);
