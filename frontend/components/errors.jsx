import React from 'react';
import { connect } from 'react-redux';

class Errors extends React.Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.errors.map(error => <li>{error}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(Errors);
