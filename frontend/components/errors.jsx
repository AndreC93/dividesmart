import React from 'react';
import { connect } from 'react-redux';

class Errors extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.errors.session.map((error, i)=> <li key={i * Math.random()} >{error}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Errors);
