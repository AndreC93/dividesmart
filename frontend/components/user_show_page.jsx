import React from 'react';
import { connect } from 'react-redux';
import { fetchFriend } from '../actions/friend_actions';
import { withRouter } from 'react-router-dom';
import { showAddBillForm, hideAddBillForm } from '../actions/modal_actions';
import AddBillForm from './add_bill_form';
import { fetchBills } from '../actions/bill_actions';
import { grabAllBills } from '../reducers/selectors';
import BillShow from './bill_show';

class UserShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchFriend(parseInt(this.props.match.params.id));
    this.props.fetchBills();
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

        { this.props.bills ? this.props.bills.map( (bill, i) => (
          <BillShow bill={bill} key={i} />
        )) : null }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.id],
  modal: state.modal.addBillForm,
  bills: grabAllBills(state, parseInt(ownProps.match.params.id)),
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  fetchBills: () => dispatch(fetchBills()),
  showAddBillForm: () => dispatch(showAddBillForm()),
  hideAddBillForm: () => dispatch(hideAddBillForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShowPage));
