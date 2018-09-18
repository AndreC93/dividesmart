import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriend } from '../actions/friend_actions';

class DashboardCenterBar extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(this.props.user.id);
  }

  render () {
    if (!this.props.user) return null;
    return (
      <div>
        <header>
          <main>
            <h1>Dashboard</h1>
          </main>
          <div>
            <button>Add a bill</button>
            <button>Settle up</button>
          </div>
        </header>

        <div className='balance-bar' >
          <header>
            <div>total balance</div>
            <div>you owe</div>
            <div>you are owed</div>
          </header>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUserId],
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCenterBar));
