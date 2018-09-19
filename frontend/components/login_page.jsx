import React from 'react';
import SessionErrors from './session_errors';
import { Link } from 'react-router-dom';
import Footer from './footer';

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
    this.props.login(this.state);
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
      <div>
        <div className='login-page'>
          <Link to='/' onClick={ () => this.props.clearErrors() } ><img src={ window.mainImage } /></Link>

          <form onSubmit={ this.handleSubmit }>
            <h2>WELCOME TO DIVIDESMART</h2>
            <SessionErrors />

            <br/>

            <p>Email address:
              <br/>
            </p>
            <input type='text' onChange={ this.update('email') } value={this.state.email} />
            <br/>

            <p>Password:
              <br/>
            </p>
            <input type='password' onChange={ this.update('password') } value={this.state.password} />
            <br/>

            <button>Log in</button>
            <span>or</span>
            <a onClick={ this.demoLogin } className='demo-button'>Demo Login</a>
          </form>
        </div>
        <div className='clear-box' >''</div>
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
