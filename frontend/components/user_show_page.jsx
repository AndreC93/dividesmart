import React from 'react';
import { connect } from 'react-redux';
import { fetchFriend } from '../actions/friend_actions';
import { withRouter } from 'react-router-dom';

class UserShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(parseInt(this.props.match.params.id));
  }

  render () {
    if (!this.props.user) return null;
    return (
      <div className='user-show-page' >
        <header>
          <div>
            <img src={ this.props.user.imageUrl } />
            <h1>{ this.props.user.username }</h1>
          </div>
          <div>
            <button><div>Add a bill</div><i className="fas fa-caret-down"></i> </button>
            <button>Settle up</button>
          </div>
        </header>

        <div>Date</div>
        <div>bills</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage));
