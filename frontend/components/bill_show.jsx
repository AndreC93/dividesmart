import React from 'react';
import PaymentItem from './payment_item';

class BillShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxHeight: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.sumUpPaymentsByUser = this.sumUpPaymentsByUser.bind(this);
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

  render () {
    if (this.props.bill.payments.length <= 0) return null;
    if (this.props.bill.payments.length > 1) {
      var summedPayments = this.sumUpPaymentsByUser();
    }
    const renderedUser = [];
    return (
      <div className='bill-show-container' >
        <div className='bill-show' onClick={ this.handleClick } >
          <p>{this.props.bill.createdAt.slice(5, 10)}</p>
          <img src={this.props.bill.category === 'General' ? window.general : null} />
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
      </div>
    );
  }

  parseDate(date) {

  }
}

export default BillShow;
