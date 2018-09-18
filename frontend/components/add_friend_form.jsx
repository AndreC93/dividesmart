import React from 'react';
import { connect } from 'react-redux';
import AddFriendFormInputItem from './add_friend_form_input_item';
import { Link } from 'react-router-dom';
import { hideAddFriendForm } from '../actions/modal_actions';
import { addFriends } from '../actions/friend_actions';

class AddFriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      namesAndEmails: [],
      message: '',
      activeInput: '',
    };
    this.updateNamesAndEmailsInput = this.updateNamesAndEmailsInput.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateActiveInput = this.updateActiveInput.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
  }

  updateNamesAndEmailsInput(e) {
    this.setState({
      namesAndEmails: e.target.value,
    });
  }

  updateActiveInput(e) {
    this.setState({
      activeInput: e.target.value,
    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addFriends(this.state.namesAndEmails);
    this.props.hideAddFriendForm();
  }

  handleInputSubmit(e) {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      this.setState({
        namesAndEmails: this.state.namesAndEmails.concat(e.target.value),
        activeInput: '',
      });
    }
  }

  makePreviousInputBubbles() {
    return (
      this.state.namesAndEmails.map( (nameOrEmail, i) => {
        return (
          <AddFriendFormInputItem
            deleteInput= { () => this.deleteInput(i) }
            input={ nameOrEmail }
            key={ i }
          />);
      })
    );
  }

  deleteInput(index) {
    this.setState({
      namesAndEmails: this.state.namesAndEmails.filter( (el, i) => i != index),
    });
  }

  render () {
    let placeholder;
    let inputWidth = {};
    if (this.state.namesAndEmails.length === 0) {
      placeholder = 'Enter names or email addresses';
    } else {
      inputWidth = { width: 'fit-content' }
    }

    return (
      <div className='add-friend-form-container' >
        <div className='modal-backdrop' onClick={ () => this.props.hideAddFriendForm() } />
        <div className='add-friend-form modal'>
          <span>
            <h1>
              <img src={ window.mainImage } />
              Invite friends
            </h1>
            <button onClick={ () => this.props.hideAddFriendForm() }>x</button>
          </span>

          <div>

            <div className='invite-input-container' >
              <div>To: </div>
              { this.makePreviousInputBubbles() }
              <input type='text'
                value={ this.state.activeInput }
                onChange={ this.updateActiveInput }
                placeholder={ placeholder }
                onKeyPress= { this.handleInputSubmit }
                style={ inputWidth }
                />
            </div>

            <textarea value={ this.state.message } onChange={ this.updateMessage }
              placeholder='Include an optional message'
              />

          </div>

          <div>
            <Link to='/friend_invite'>Preview the message you'll send</Link>
            <button onClick={ this.handleSubmit }>Send invites and add friends</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal.addFriendForm,
});

const mapDispatchToProps = dispatch => ({
  hideAddFriendForm: () => dispatch(hideAddFriendForm()),
  addFriends: usernamesAndEmails => dispatch(addFriends(usernamesAndEmails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendForm);
