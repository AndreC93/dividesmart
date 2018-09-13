import React from 'react';
import SessionErrors from './session_errors';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component {
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
    this.props.signup(this.state);
  }

  demoLogin() {
    this.setState({
      email: 'demo@login.com',
      password: 'demologin',
    }, () => setTimeout(() => this.props.login(this.state), 750));
  }

  componentDidMount() {
    if (!this.props.errors.includes('Invalid credentials')) {
      this.props.clearErrors();
    }
  }

  render () {
    return (
      <div className='a-signup-form login-page'>
        <Link to='/' ><img src={ window.mainImage } /></Link>

        <form onSubmit={ this.handleSubmit }>
          <h2>WELCOME TO DIVIDESMART</h2>
          <SessionErrors />

          <br/>

          <label>Email address:
            <br/>
            <input type='text' onChange={ this.update('email') } value={this.state.email} />
          </label>
          <br/>

          <label>Password:
            <br/>
            <input type='password' onChange={ this.update('password') } value={this.state.password} />
          </label>
          <br/>

          <button>Log in</button>
          <span>or</span>
          <a onClick={ this.demoLogin } className='demo-button'>Demo Login</a>
        </form>
      </div>
    );
  }
}

export default LoginPage;
