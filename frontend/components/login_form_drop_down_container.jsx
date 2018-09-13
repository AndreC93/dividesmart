import LoginFormDropDown from './login_form_drop_down';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

const mapStateToProps = state => ({
  form: {
    email: '',
    password: '',
  },
});

const mapDispatchToProps = dispatch => ({
  login: (userInput) => dispatch(login(userInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormDropDown);
