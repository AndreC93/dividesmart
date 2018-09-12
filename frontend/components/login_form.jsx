import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.form;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render () {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Email address' type='text' onChange={this.update('email')} value={this.state.email} />
          <br/>
          <input placeholder='Password' type='password' onChange={this.update('password')} value={this.state.password} />
          <br/>
          <button>Log in to Dividesmart</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
