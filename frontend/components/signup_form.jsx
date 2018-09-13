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
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  showOtherInputs() {
    return $('.slideout').css('max-height', '600px');
  }

  render () {
    return (
      <div className='signup-form'>
        <Link to='/' ><img src={window.mainImage} /></Link>

        <form onSubmit={this.handleSubmit}>
          <h2>INTRODUCE YOURSELF</h2>
          <SessionErrors />
          <label>Hi there! My name is
            <br/>
            <input type='text' onChange={ (e) => {
                this.showOtherInputs();
                this.update('username')(e);
              } } value={this.state.username}/>
          </label>
          <br/>
          <div className='slideout' >
            <label>Here's my <strong>email address</strong>:
              <br/>
              <input type='text' onChange={this.update('email')} value={this.state.email} />
            </label>
            <br/>

            <label>And here's my <strong>password</strong>:
              <br/>
              <input type='password' onChange={this.update('password')} value={this.state.password} />
            </label>
            <br/>
          </div>

          <button>Sign me up!</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
