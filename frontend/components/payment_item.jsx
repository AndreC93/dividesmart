import React from 'react';
import { connect } from 'react-redux';
import { grabAllUsernames } from '../reducers/selectors';

class PaymentItem extends React.Component {
  checkIfDebt(num) {
    return num < 0 ? 'owes' : 'paid';
  }

  render () {
    if (!this.props.usernames[this.props.payment.userId] || isNaN(this.props.amount) || !this.props.show) return null;
    return (
      <div className='payment-item' >
        <img src={ window.defaultAvatar } />
        <div>
          <strong>{this.props.usernames[this.props.payment.userId].username}</strong> { this.checkIfDebt(this.props.amount) } $
            { (this.props.amount)/100 }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usernames: grabAllUsernames(state),
});

export default connect(mapStateToProps)(PaymentItem);
