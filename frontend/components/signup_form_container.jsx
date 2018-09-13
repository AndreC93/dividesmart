import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, login } from '../actions/session_actions';

const mapStateToProps = state => ({
  form: {
    username: '',
    email: '',
    password: '',
  },
});

const mapDispatchToProps = dispatch => ({
  signup: (userInput) => dispatch(signup(userInput)),
  login: (userInput) => dispatch(login(userInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
