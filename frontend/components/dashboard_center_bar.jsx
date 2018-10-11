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
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      owe: 0,
      owed: 0,
    };
    this.calculateDebts = this.calculateDebts.bind(this);
    this.numberOfBills = undefined;
  }
  
  componentDidMount() {
    this.props.fetchFriend(this.props.user.id);
    this.props.fetchBills();
    setTimeout(() => {
      if (this.props.bills) {
        this.calcDebtsInitializer();
      }
    }, 350);
  }

  calculateDebts() {
    let owe = 0;
    let owed = 0;
    if (!this.props.bills) {
      return this.setState({
        owe: 0,
        owed: 0,
      });
    }
    this.props.bills.forEach( bill => {
      bill.payments.forEach( payment => {
        if (this.props.user.id === payment.userId) {
          if (payment.amount < 0) {
            owe += payment.amount;
          } else {
            owed += payment.amount;
          }
        }
      });
    });
    if (owe !== this.state.owe || owed !== this.state.owed) {
      this.setState({
        owe: owe/100,
        owed: owed/100,
      });
    }
  }

  filterBillsForFriends() {
    const friendsBills = [];
    const that = this;
    that.props.bills.forEach( bill => {
      if (that.props.friendsIds.includes(bill.creatorId) || that.props.user.id === bill.creatorId) {
        const billHasAFriend = bill.payments.map( pay => pay.userId).some( userId => that.props.friendsIds.includes(userId.toString()) );
        if (billHasAFriend) {
          friendsBills.push(bill);
        }
      }
    } );
    return friendsBills.map( (bill, i) => (
      <BillShow bill={bill} key={i} />
    ));
  }

  calcDebtsInitializer() {
    this.numberOfBills = this.props.bills.length;
    setTimeout(() => this.calculateDebts(), 50);
  }

  render () {
    if (!this.props.user) return null;
    if (this.numberOfBills === undefined && this.props.bills) this.calcDebtsInitializer();
    if (this.numberOfBills && this.props.location.pathname === "/dashboard" && this.numberOfBills !== this.props.bills.length) {
      this.calcDebtsInitializer();
    }
    const balance = Math.round((this.state.owe + this.state.owed) * 100) / 100 ;
    const redOrGreen = balance < 0 ? {color: '#ff652f'} : {};
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
            <div>total balance: <b style={ redOrGreen } >{balance < 0 ? '-' : null}${Math.abs(balance)}</b></div>
            <div>you owe: <b>${Math.abs(this.state.owe)}</b></div>
            <div>you are owed: <b>${this.state.owed}</b></div>
          </header>
        </div>

        <AddBillForm />
        { this.props.bills ? this.filterBillsForFriends() : null }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUserId],
  modal: state.modal.addBillForm,
  bills: grabAllBills(state),
  friendsIds: Object.keys(state.entities.users).filter( id => id != state.session.currentUserId),
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: (id) => dispatch(fetchFriend(id)),
  fetchBills: () => dispatch(fetchBills()),
  showAddBillForm: () => dispatch(showAddBillForm()),
  hideAddBillForm: () => dispatch(hideAddBillForm()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardCenterBar));
