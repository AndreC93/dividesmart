import React from 'react';
import PaymentItem from './payment_item';

class BillShow extends React.Component {
  constructor(props) {
    super(props);
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

  render () {
    if (this.props.bill.payments.length <= 0) return null;
    if (this.props.bill.payments.length > 1) {
      var summedPayments = this.sumUpPaymentsByUser();
    }
    const renderedUser = [];
    return (
      <div className='bill-show' >
        <p>{this.props.bill.createdAt}</p>
        <p>{this.props.bill.category}</p>
        <p>{this.props.bill.category}</p>
        <h1>{this.props.bill.description}</h1>

        <ul>
          {this.props.bill.payments.map( (payment) =>
            {
              if (renderedUser.includes(payment.userId)) return null;
              const amount = summedPayments[payment.userId];
              renderedUser.push(payment.userId);
              return (<PaymentItem key={ payment.userId } payment={ payment } amount={ amount } />);
            })
          }
        </ul>

      </div>
    );
  }
}

export default BillShow;
