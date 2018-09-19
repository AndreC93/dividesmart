import React from 'react';
import FormInputItem from './form_input_item';
import * as Calculators from '../util/calculators';
import { connect } from 'react-redux';
import { hideAddBillForm } from '../actions/modal_actions';
import { addBill } from '../actions/bill_actions';

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
    };
    this.update = this.update.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
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
            input={ friend }
            key={ i }
          />);
      })
    );
  }

  handleInputSubmit(e) {
    if (e.key === 'Enter' && e.target.value.length > 0) {
      this.setState({
        friends: this.state.friends.concat(e.target.value),
        activeInput: '',
      });
    }
  }

  deleteInput(index) {
    this.setState({
      friends: this.state.friends.filter( (el, i) => i != index),
    });
  }

  render () {
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
        <header>
          Add a bill<button>x</button>
        </header>

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

        <form>
          <input placeholder='Enter a description' onChange={ this.update('description') } />

          <input placeholder='0.00' onChange={ this.update('balance') } />

          <div>Paid by <a>you</a> and split <a>equally</a>.</div>
          <div>(${ perPersonAmount })</div>

          <div><a>{ this.state.date }</a><a>Add notes</a></div>

          <div><a>Cancel</a><button>Save</button></div>
        </form>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  hideAddBillForm: () => dispatch(hideAddBillForm()),
  addBill: bill => dispatch(addBill(bill)),
});

export default connect(null, mapDispatchToProps)(AddBillForm);
