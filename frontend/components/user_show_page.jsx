import React from 'react';
import { connect } from 'react-redux';
import { fetchFriend } from '../actions/friend_actions';
import { withRouter } from 'react-router-dom';
import { showAddBillForm, hideAddBillForm } from '../actions/modal_actions';
import AddBillForm from './add_bill_form';

class UserShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(parseInt(this.props.match.params.id));
  }

  render () {
    if (!this.props.user) return null;
    return (
      <div>
        <header>
          <main>
            <img src={ window.defaultAvatar } />
            <h1>{ this.props.user.username }</h1>
          </main>
          <div>
            <button onClick={ this.props.modal ? this.props.hideAddBillForm : this.props.showAddBillForm } >
              Add a bill
              <i className="fas fa-caret-down"></i>
            </button>
            <button>Settle up</button>
          </div>
        </header>

        <div className='user-show-transactions' >
          <div><header>Month/Year</header>Friend's Bills With You</div>
        </div>

        <AddBillForm />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
  modal: state.modal.addBillForm,
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  showAddBillForm: () => dispatch(showAddBillForm()),
  hideAddBillForm: () => dispatch(hideAddBillForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage));
