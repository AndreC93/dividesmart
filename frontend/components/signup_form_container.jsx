import SignupForm from './signup_form';
import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  let maxHeight = 600;
  if (ownProps.location.pathname === '/signup') maxHeight = 0;
  return {
    form: {
      username: '',
      email: '',
      password: '',
      maxHeight: maxHeight,
    },
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => ({
  signup: (userInput) => dispatch(signup(userInput)),
  login: (userInput) => dispatch(login(userInput)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
