import React from 'react';

class FormInputItem extends React.Component {

  render () {
    return (<figure id='form-input-item' >{this.props.input}<button onClick={ () => this.props.deleteInput() }>x</button></figure>);
  }
}

export default FormInputItem;
