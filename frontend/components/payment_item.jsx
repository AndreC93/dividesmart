import React from 'react';
import { connect } from 'react-redux';
import { grabAllUsernames } from '../reducers/selectors';

class PaymentItem extends React.Component {
  checkIfDebt(num) {
    return num < 0 ? 'owes' : 'paid';
  }

  padZeros() {
    let num = `${(this.props.amount)/100}`;
    if (!num.includes('.')) {
      return num + '.00';
    } else {
      return num;
    }
  }

  render () {
    if (!this.props.usernames[this.props.payment.userId] || isNaN(this.props.amount) || !this.props.show) return null;
    return (
      <div className='payment-item' >
        <img src={ window.defaultAvatar } />
        <div>
          <strong>{this.props.usernames[this.props.payment.userId].username}</strong> { this.checkIfDebt(this.props.amount) } $
            { this.padZeros() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  usernames: grabAllUsernames(state),
});

export default connect(mapStateToProps)(PaymentItem);
