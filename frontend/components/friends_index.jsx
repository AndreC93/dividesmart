import React from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions/friend_actions';
import { grabAllFriends } from '../reducers/selectors';
import FriendIndexItem from './friend_index_item';
import { showAddFriendForm } from '../actions/modal_actions';
import AddFriendForm from './add_friend_form';

class FriendsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render () {
    return (
      <div className='friends-index'>
        <ul>
          <header>
            <h4>FRIENDS</h4>
            <div>
              <a onClick={ () => this.props.showAddFriendForm() } ><i className='fas fa-plus' ></i> add</a>
            </div>
          </header>

          {this.props.friends.map( (friend, i) => (<FriendIndexItem friend={friend} key={i} />) )}
        </ul>
        { this.props.addFriendForm ? <AddFriendForm /> : null }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: grabAllFriends(state),
  addFriendForm: state.modal.addFriendForm,
});

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  showAddFriendForm: () => dispatch(showAddFriendForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsIndex);
