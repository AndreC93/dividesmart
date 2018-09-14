import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../actions/session_actions';

const mapStateToProps = state => ({
  form: {
    username: '',
    email: '',
    password: '',
    maxHeight: 0,
  },
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  signup: (userInput) => dispatch(signup(userInput)),
  login: (userInput) => dispatch(login(userInput)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
