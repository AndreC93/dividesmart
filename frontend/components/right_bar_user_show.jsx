import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions/friend_actions';
import { withRouter, Link } from 'react-router-dom';

class RightBarUserShow extends React.Component {
  render () {
    return (
      <div className='right-bar-user-show' >
        <Link to='/' >
          <button onClick={ () => this.props.deleteFriend(this.props.userId) } >Remove this friend</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  userId: parseInt(ownProps.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  deleteFriend: (friendId) => dispatch(deleteFriend(friendId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightBarUserShow));
