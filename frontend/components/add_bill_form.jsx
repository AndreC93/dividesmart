import React from 'react';
import FormInputItem from './form_input_item';
import * as Calculators from '../util/calculators';
import { connect } from 'react-redux';
import { hideAddBillForm } from '../actions/modal_actions';
import { addBill } from '../actions/bill_actions';
import { grabAllFriends } from '../reducers/selectors';
import ErrorMessageBanner from './error_message_banner';

class AddBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      friends: [],
      activeInput: '',
      description: '',
      balance: '',
      perPerson: 0,
      date: `${this.date.toDateString()}`,
      errorMessageBanner: '',
      participants: [],
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.makeParticipants = this.makeParticipants.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  makePreviousInputBubbles() {
    return (
      this.state.friends.map( (friend, i) => {
        return (
          <FormInputItem
            deleteInput= { () => this.deleteInput(i) }
            input={ friend[0] }
            key={ i }
          />);
      })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.calculatedPerPerson()) {
      this.props.hideAddBillForm();
    } else {
      this.setState({ errorMessageBanner: 'Invalid Amount' });
    }
  }

  handleInputSubmit(e) {
    const input = e.target.value;
    if (e.key === 'Enter' && input.length > 0) {
      const friendsUsernames = {};
      const friendsEmails = {};
      this.props.friends.forEach( friend => {
        friendsUsernames[friend.username] = [friend.username, friend.id];
        friendsEmails[friend.email] = [friend.email, friend.id];
      });

      if ( friendsUsernames[input] || friendsEmails[input] ) {
        if ( friendsUsernames[input] ) {
          this.setState({
            friends: this.state.friends.concat([[
              input, friendsUsernames[input][1],
            ]]),
            activeInput: '',
          });
        } else {
          this.setState({
            friends: this.state.friends.concat([[
              input, friendsEmails[input][1],
            ]]),
            activeInput: '',
          });
        }
      } else {
        this.setState({
          activeInput: '',
          errorMessageBanner: 'Please select one of your friends',
        });
      }
    }
  }

  deleteInput(index) {
    this.setState({
      friends: this.state.friends.filter( (el, i) => i != index),
    });
  }

  calculatedPerPerson() {
    const per = Calculators.splitEqually(this.state.balance, this.state.friends.length + 1);
    if (per <= 0 || !per) {
      return false;
    } else {
      this.setState(
        { perPerson: per * 100,
           balanceCents: parseFloat(this.state.balance) * 100,
         },
         () => this.makeParticipants()
       );
      return true;
    }
  }

  makeParticipants() {
    const sum = this.state.perPerson * (this.state.friends.length + 1);
    let leftover = (this.state.balanceCents - sum);
    const perPerson = this.state.friends.map( x => this.state.perPerson ).concat(this.state.perPerson);
    if (leftover !== 0) {
      debugger;
      for (let i = 0; leftover !== 0; i++) {
        debugger;
        if (leftover > 0) {
          leftover -= 1;
          perPerson[i] += 1;
        } else {
          leftover += 1;
          perPerson[i] -= 1;
        }
      }
    }
    let participants = this.state.friends.map( friend => [friend[1], perPerson.pop()] );
    participants = participants.concat([[this.props.currentUserId, perPerson.pop()]]);
    debugger;
    this.setState(
      { participants: participants },
      () => this.props.addBill(this.state)
    );
  }

  render () {
    if (!this.props.modal) return null;
    let placeholder;
    let perPersonAmount;
    let inputWidth = {};
    if (this.state.friends.length === 0) {
      placeholder = 'Enter names or email addresses';
      perPersonAmount = this.state.balance === '' ? '0.00' : this.state.balance;
    } else {
      inputWidth = { width: 'fit-content' };
      perPersonAmount = this.state.balance === '' ? '0.00' : Calculators.splitEqually(this.state.balance, this.state.friends.length + 1);
    }
    return (
      <div>
        <div className='modal-backdrop' onClick={ this.props.hideAddBillForm } />

        <div className='modal add-friend-form add-bill-form' >
          <header>
            Add a bill<button onClick={ this.props.hideAddBillForm } >x</button>
          </header>

          <ErrorMessageBanner extraClass='add-bill-error-banner' message={ this.state.errorMessageBanner } close={ () => this.setState({ errorMessageBanner: '' }) } />

          <div className='invite-input-container' >
            <div>With <strong>you</strong> and:</div>
            { this.makePreviousInputBubbles() }
            <input type='text'
              value={ this.state.activeInput }
              onChange={ this.update('activeInput') }
              placeholder={ placeholder }
              onKeyPress= { this.handleInputSubmit }
              style={ inputWidth }
              />
          </div>

          <form onSubmit={ this.handleSubmit }>
            <div>
              <img src={ window.general } />
              <h4>
                <input placeholder='Enter a description' onChange={ this.update('description') } />
                <div>
                  <i className="fas fa-dollar-sign" /><input placeholder='0.00' onChange={ this.update('balance') } />
                </div>
              </h4>
            </div>

            <div>Paid by <a>you</a> and split <a>equally</a>.</div>
            <div>(${ perPersonAmount }/person)</div>

            <div><a>{ this.state.date }</a><a>Add notes</a></div>

            <div><a onClick={ this.props.hideAddBillForm } >Cancel</a><button onClick={ this.handleSubmit } >Save</button></div>
          </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: grabAllFriends(state),
  modal: state.modal.addBillForm,
  currentUserId: state.session.currentUserId,
});

const mapDispatchToProps = dispatch => ({
  hideAddBillForm: () => dispatch(hideAddBillForm()),
  addBill: bill => {debugger; return dispatch(addBill(bill));},
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
