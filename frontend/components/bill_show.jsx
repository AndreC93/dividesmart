import React from 'react';
import PaymentItem from './payment_item';

class BillShow extends React.Component {
  render () {
    return (<div>
      <p>{this.props.createdAt}</p>
      <p>{this.props.category}</p>
      <h1>{this.props.description}</h1>
      <ul>
        {this.props.payments.map( (payment, i) => (<PaymentItem key={i} />))}
      </ul>
    </div>);
  }
}

export default BillShow;
