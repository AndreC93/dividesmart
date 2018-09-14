import React from 'react';
import SessionErrors from './session_errors';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.form;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showOtherInputs = this.showOtherInputs.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  showOtherInputs() {
    this.setState({ maxHeight: 600 });
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
              <input type='text' onChange={ this.update('email') } value={ this.state.email } />
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
