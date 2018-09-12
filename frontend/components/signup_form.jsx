import React from 'react';

class SignupForm extends React.Component {
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
    this.props.signup(this.state);
  }

  render () {
    return (
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>
          <h2>INTRODUCE YOURSELF</h2>

          <label>Hi there! My name is
            <br/>
            <input type='text' onChange={this.update('username')} value={this.state.username} />
          </label>
          <br/>

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

          <button>Sign me up!</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
