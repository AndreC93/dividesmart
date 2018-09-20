import React from 'react';
import { connect } from 'react-redux';
import { grabAllUsernames } from '../reducers/selectors';

class PaymentItem extends React.Component {
  checkIfDebt(str) {
    return str[0] === '-' ? 'owes' : 'paid';
  }

  render () {
    return (
      <div>
        <img src={ window.default_avatar } />
        <div>
          <strong>{this.props.userNames[this.props.userId].username}</strong> { this.checkIfDebt(this.props.amount) } $
            { this.props.amount.split('$')[1] }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userNames: grabAllUsernames(state),
});

export default connect(mapStateToProps)(PaymentItem);
