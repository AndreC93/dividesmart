import React from 'react';

class LoginFormDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.form;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
    this.props.open();
  }

  show() {
    return { maxHeight: "300px", padding: '10px',  border: '1px solid #ccc' };
  }

  demoLogin() {
    this.setState({
      email: 'demo@login.com',
      password: 'demologin',
    }, () => setTimeout(() => {
      this.props.login(this.state);
      this.props.open();
    }, 750));
  }

  render () {
    let show = {};
    if (this.props.modal) show = this.show();
    return (
      <div className="login-form" style={ show }>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Email address' type='text' onChange={this.update('email')} value={this.state.email} />
          <br/>
          <input placeholder='Password' type='password' onChange={this.update('password')} value={this.state.password} />
          <br/>
          <button>Log in to Dividesmart</button>
          <a onClick={ this.demoLogin }>Demo Login</a>
        </form>
      </div>
    );
  }
}

export default LoginFormDropDown;
