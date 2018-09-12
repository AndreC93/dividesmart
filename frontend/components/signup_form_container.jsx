import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup } from '../actions/session_actions';

const mapStateToProps = state => ({
  form: {
    username: '',
    email: '',
    password: '',
  },
});

const mapDispatchToProps = dispatch => ({
  signup: (userInput) => dispatch(signup(userInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
