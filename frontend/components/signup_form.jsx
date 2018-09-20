import React from 'react';
import SessionErrors from './session_errors';
import { Link } from 'react-router-dom';
import ErrorMessageBanner from './error_message_banner';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.form;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showOtherInputs = this.showOtherInputs.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
    this.checkEmail(this.state.email);
  }

  showOtherInputs() {
    this.setState({ maxHeight: 600 });
  }

  checkEmail(email) {
    if (email.length === 0) return null;
    if (/[@]/.test(this.state.email)) {
      if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
        this.setState({
          errorMessageBanner: "Email must end with a domain name",
        });
      }
    } else {
      this.setState({
        errorMessageBanner: "Email must contain a '@'",
      });
    }
  }

  demoLogin() {
    this.showOtherInputs();
    this.setState({
      username: 'Divider',
      email: 'demo@login.com',
      password: 'demologin',
    }, () => setTimeout(() => this.props.login(this.state), 750));
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render () {
    const maxHeight = { maxHeight: this.state.maxHeight };
    return (
      <div className='a-signup-form'>
        <Link to='/' ><img src={ window.mainImage } /></Link>

        <form onSubmit={ this.handleSubmit }>
          <h2>INTRODUCE YOURSELF</h2>
          <SessionErrors />
          <label>Hi there! My name is
            <br/>
            <input type='text' onChange={ (e) => {
                this.showOtherInputs();
                this.update('username')(e);
              } } value={ this.state.username }/>
          </label>
          <br/>


          <div className='slideout' style={ maxHeight } >
            <label>Here's my <strong>email address</strong>:
              <br/>

              <ErrorMessageBanner extraClass={'signup-error-banner'} message={ this.state.errorMessageBanner } close={ () => this.setState({ errorMessageBanner: '' }) } />

              <input type='text' onChange={ this.update('email') } value={ this.state.email } onBlur={ this.checkUsername } />

            </label>
            <br/>

            <label>And here's my <strong>password</strong>:
              <br/>
              <input type='password' onChange={ this.update('password') } value={ this.state.password } />
            </label>
            <br/>
          </div>

          <button>Sign me up!</button>
          <span>or</span>
          <a onClick={ this.demoLogin } className='demo-button'>Demo Login</a>
        </form>
      </div>
    );
  }
}

export default SignupForm;
