import React from 'react';
import LoginForm from './login_form_drop_down_container';
import { connect } from 'react-redux';
import { showLoginForm, hideLoginForm } from '../actions/modal_actions';

class LoginFormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.state.showComponent ? this.props.hideLoginForm() : this.props.showLoginForm();

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
  showLoginForm: () => dispatch(showLoginForm()),
  hideLoginForm: () => dispatch(hideLoginForm()),
});

export default connect(null, mapDispatchToProps)(LoginFormButton);
