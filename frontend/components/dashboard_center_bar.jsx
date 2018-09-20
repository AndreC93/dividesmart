import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchFriend } from '../actions/friend_actions';
import { showAddBillForm, hideAddBillForm } from '../actions/modal_actions';
import AddBillForm from './add_bill_form';
import { fetchBills } from '../actions/bill_actions';
import { grabAllBills } from '../reducers/selectors';
import BillShow from './bill_show';

class DashboardCenterBar extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(this.props.user.id);
    this.props.fetchBills();
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
        { this.props.bills ? this.props.bills.map( (bill, i) => (
          <BillShow bill={bill} key={i} />
        )) : null }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUserId],
  modal: state.modal.addBillForm,
  bills: grabAllBills(state),
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  fetchBills: () => dispatch(fetchBills()),
  showAddBillForm: () => dispatch(showAddBillForm()),
  hideAddBillForm: () => dispatch(hideAddBillForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCenterBar));
