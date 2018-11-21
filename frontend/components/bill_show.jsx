import React from 'react';
import PaymentItem from './payment_item';
import { connect } from 'react-redux';
import { deleteBill } from '../actions/bill_actions';

class BillShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: 0,
      showButtons: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.sumUpPaymentsByUser = this.sumUpPaymentsByUser.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  sumUpPaymentsByUser() {
    const summedPayments = {};
    this.props.bill.payments.forEach( payment => {
      if (summedPayments[payment.userId] === undefined) {
        summedPayments[payment.userId] = 0;
      }
      summedPayments[payment.userId] += payment.amount;
    });
    return summedPayments;
  }

  handleClick() {
    if (this.state.maxHeight === 0) {
      this.setState({
        maxHeight: 'fit-content',
      });
    } else {
      this.setState({
        maxHeight: 0,
      });
    }
  }

  handleDelete() {
    this.props.deleteBill(this.props.bill.id);
  }

  toggleButtons() {
    this.setState({
      showButtons: true,
    });
  }

  render () {
    if (this.props.bill.payments.length <= 0) return null;
    if (this.props.bill.payments.length > 1) {
      var summedPayments = this.sumUpPaymentsByUser();
    }
    const renderedUser = [];
    return (
      <div className='bill-show-container' onClick={ this.handleClick } >
        <div className='bill-show' >
          <p>{this.props.bill.createdAt.slice(5, 10)}</p>
          <img src={this.props.bill.category === 'Food and drink' ? window.food : window.general } />
          <h1>{this.props.bill.description}</h1>
        </div>


        <ul style={ this.state } className='debtors' >
          {this.props.bill.payments.map( (payment) =>
            {
              if (renderedUser.includes(payment.userId)) return null;
              const amount = summedPayments[payment.userId];
              renderedUser.push(payment.userId);
              return (<PaymentItem key={ payment.userId } payment={ payment } amount={ amount } show={ !!this.state.maxHeight } />);
            })
          }
        </ul>
        <i className="fas fa-cog"></i>
        <b onClick={ this.handleDelete } >x</b>
      </div>
    );
  }
}
//<b onClick={ this.handleDelete } >x</b>

const mapDispatchToProps = dispatch => ({
  deleteBill: (billId) => dispatch(deleteBill(billId)),
});

export default connect(null, mapDispatchToProps)(BillShow);
