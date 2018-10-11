import React from 'react';
import FormInputItem from './form_input_item';
import * as Calculators from '../util/calculators';
import { connect } from 'react-redux';
import { hideAddBillForm, showCreditor, hideCreditor, showCategories, hideCategories } from '../actions/modal_actions';
import { addBill } from '../actions/bill_actions';
import { grabAllFriends } from '../reducers/selectors';
import ErrorMessageBanner from './error_message_banner';

class AddBillForm extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      category: 'General',
      friends: [],
      activeInput: '',
      description: '',
      balance: '',
      perPerson: 0,
      date: `${this.date.toDateString()}`,
      errorMessageBanner: '',
      participants: [],
      creditor: props.currentUser.id,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBackspace = this.handleBackspace.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.makeParticipants = this.makeParticipants.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
    if (!this.state.friends.length) return this.setState({ errorMessageBanner: 'Please select a friend' });
    if (this.calculatedPerPerson()) {
      this.props.hideAddBillForm();
      setTimeout(this.handleClose, 500);
    } else {
      this.setState({ errorMessageBanner: 'Invalid Amount' });
    }
  }

  handleInputSubmit(e) {
    const input = e.target.value;
    if (e.key === 'Enter' && input.length > 0) {
      this.inputFriendIntoState(input);
    }
  }

  inputFriendIntoState(input) {
    const friendsUsernames = {};
    const friendsEmails = {};
    this.props.friends.forEach(friend => {
      friendsUsernames[friend.username] = [friend.username, friend.id];
      friendsEmails[friend.email] = [friend.email, friend.id];
    });
    const repeatedName = !this.state.friends.every(friend => friend[0] !== input);

    if ((friendsUsernames[input] || friendsEmails[input]) && !repeatedName) {
      if (friendsUsernames[input]) {
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
    } else if (repeatedName) {
      this.setState({
        activeInput: '',
        errorMessageBanner: 'You already added that friend to this bill',
      });
    } else {
      this.setState({
        activeInput: '',
        errorMessageBanner: 'Please select one of your friends',
      });
    }
  }

  deleteInput(index) {
    this.setState({
      friends: this.state.friends.filter( (el, i) => i != index),
    });
  }

  handleBlur(e) {
    if (e.target.value !== '') this.inputFriendIntoState(e.target.value);
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
      for (let i = 0; leftover !== 0; i++) {
        if (leftover > 0) {
          leftover -= 1;
          perPerson[i] += 1;
        } else {
          leftover += 1;
          perPerson[i] -= 1;
        }
      }
    }
    let participants = this.state.friends.map( friend => [friend[1], (perPerson.pop() * -1)] );
    participants = participants.concat([[this.props.currentUser.id, (perPerson.pop() * -1)]]).concat([[this.state.creditor, this.state.balanceCents]]);
    this.setState(
      { participants: participants },
      () => this.props.addBill(this.state)
    );
  }

  generateCreditorModal() {
    const friendsPlusUser = this.state.friends.concat([[this.props.currentUser.username, this.props.currentUser.id]]);
    return friendsPlusUser.map( (user, i) => (
      <li
        style={ user[1] === this.state.creditor ? {background: '#EEEEEE'} : {} }
        onClick={ () => {
          this.setState(
            { creditor: user[1] },
            () => this.props.hideCreditor()
          );
        }
       }
        key={i} >{user[0]}
      </li>
    ));
  }

  generateCategories() {
    const cats = ['General', 'Food and drink'];
    return cats.map( (cat, i) => (
      <li
        style={ cat === this.state.category ? {background: '#EEEEEE'} : {} }
        onClick={ () => {
          this.setState(
            { category: cat },
            () => this.props.hideCategories()
          );
        }
       }
        key={i} >{cat}
      </li>
    ));
  }

  handleBackspace(e) {
    const names = this.state.friends;
    if (e.key === 'Backspace' && e.target.value.length === 0) {
      names.pop();
      this.setState({
        friends: names,
      });
    }
  }

  handleClose() {
    this.props.hideAddBillForm();
    this.setState({
      category: 'General',
      friends: [],
      activeInput: '',
      description: '',
      balance: '',
      perPerson: 0,
      date: `${this.date.toDateString()}`,
      errorMessageBanner: '',
      participants: [],
      creditor: this.props.currentUser.id,
    });
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
      inputWidth = { minWidth: '30px' };
      perPersonAmount = this.state.balance === '' ? '0.00' : Calculators.splitEqually(this.state.balance, this.state.friends.length + 1);
    }

    return (
      <div className='add-bill-form-container' >
        <div className='modal-backdrop' onClick={  this.handleClose } />

        <div className='modal add-friend-form add-bill-form' >
          <header>
            Add a bill<button onClick={ this.handleClose } >x</button>
          </header>


          <div className='invite-input-container add-bill-input-container'  onClick={ () => setTimeout(this.props.hideCreditor, 500) } >
            <h5>With <strong>you</strong> and:</h5>
            { this.makePreviousInputBubbles() }
            <input type='text'
              value={ this.state.activeInput }
              onChange={ this.update('activeInput') }
              placeholder={ placeholder }
              onKeyPress= { this.handleInputSubmit }
              onKeyDown= { this.handleBackspace }
              onBlur= { this.handleBlur }
              style={ inputWidth }
              />
          </div>
          <div className='clear-fix'></div>

          <ErrorMessageBanner extraClass='add-bill-error-banner' message={ this.state.errorMessageBanner } close={ () => this.setState({ errorMessageBanner: '' }) } />

          <form onSubmit={ this.handleSubmit } >
            <div>
              <img src={ this.state.category === 'General' ? window.general : window.food }  onClick={ () => {
                  this.props.categoriesMenu ? this.props.hideCategories() : this.props.showCategories();
                } }/>
              {this.props.categoriesMenu ? <ul className='categories-menu' >{this.generateCategories()}</ul> : null}
              <h4 onClick={ () => setTimeout(this.props.hideCreditor, 500) } >
                <input id='bill-form-description' placeholder='Enter a description' onChange={ this.update('description') } />
                <div className='money-input'>
                  <i className="fas fa-dollar-sign" /><input placeholder='0.00' onChange={ this.update('balance') }  />
                </div>
              </h4>
            </div>

            <div id='line-break' />

            <section>
              <aside>Paid by <a
                onClick={ this.props.creditorMenu ? this.props.hideCreditor : this.props.showCreditor }
                >{ this.state.creditor === this.props.currentUser.id ? 'you' : this.props.friends.filter( friend => friend.id === this.state.creditor)[0].username }</a> and split <a>equally</a>.</aside>
              <aside>(${ perPersonAmount }/person)</aside>
            </section>

              { this.props.creditorMenu ?
                <ul className='creditor-menu' >
                  <i className="fas fa-caret-up"></i>
                  <i className="fas fa-caret-up"></i>
                  <i className="fas fa-caret-up"></i>
                 {this.generateCreditorModal()}
                </ul>
                : null
               }

            <div id='line-break' />

            <div className='dates-and-add-note' ><a>{ this.state.date }</a><a>Add notes feature to come</a></div>

            <div id='line-break' />

            <footer><a onClick={ this.handleClose } >Cancel</a><button onClick={ this.handleSubmit } >Save</button></footer>
          </form>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: grabAllFriends(state),
  modal: state.modal.addBillForm,
  currentUser: state.entities.users[state.session.currentUserId],
  creditorMenu: state.modal.creditorMenu,
  categoriesMenu: state.modal.categoriesMenu,
});

const mapDispatchToProps = dispatch => ({
  hideAddBillForm: () => {
    dispatch(hideAddBillForm());
    dispatch(hideCreditor());
    dispatch(hideCategories());
  },
  addBill: bill => dispatch(addBill(bill)),
  showCreditor: () => dispatch(showCreditor()),
  hideCreditor: () => {
    dispatch(hideCreditor());
    dispatch(hideCategories());
  },
  showCategories: () => dispatch(showCategories()),
  hideCategories: () => dispatch(hideCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBillForm);
