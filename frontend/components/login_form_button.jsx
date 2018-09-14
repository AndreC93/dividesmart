import React from 'react';
import LoginForm from './login_form_drop_down_container';
import { connect } from 'react-redux';
import { showModal, hideModal } from '../actions/modal_actions';

class LoginFormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.state.showComponent ? this.props.hideModal() : this.props.showModal();

    this.setState(
      { showComponent: !this.state.showComponent }
    );
  }

  render() {
    return (
      <div>
        <button onClick={this._onClick} className='login-button'>Log in</button>
        <LoginForm open={ this._onClick } />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(showModal()),
  hideModal: () => dispatch(hideModal()),
});

export default connect(null, mapDispatchToProps)(LoginFormButton);
