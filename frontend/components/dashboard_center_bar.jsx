import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriend } from '../actions/friend_actions';
import { showAddBillForm, hideAddBillForm } from '../actions/modal_actions';
import AddBillForm from './add_bill_form';

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
            <button onClick={ this.props.modal ? this.props.hideAddBillForm : this.props.showAddBillForm } >
              Add a bill
            </button>
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

        <AddBillForm />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUserId],
  modal: state.modal.addBillForm,
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  showAddBillForm: () => dispatch(showAddBillForm()),
  hideAddBillForm: () => dispatch(hideAddBillForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCenterBar));
