import LoginPage from './login_page';
import { connect } from 'react-redux';
import { login, clearErrors } from '../actions/session_actions';

const mapStateToProps = state => ({
  form: {
    email: '',
    password: '',
  },
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  login: (userInput) => dispatch(login(userInput)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
