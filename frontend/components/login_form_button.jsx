import React from 'react';
import LoginForm from './login_form_drop_down_container';

class LoginFormButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.setState({
      showComponent: !this.state.showComponent,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this._onClick} className='login-button'>Log in</button>
        {this.state.showComponent ?
           <LoginForm open={ this._onClick } /> :
           null
        }
      </div>
    );
  }
}

export default LoginFormButton;
