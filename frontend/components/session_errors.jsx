import React from 'react';
import { connect } from 'react-redux';

class SessionErrors extends React.Component {
  render () {
    if (this.props.errors.session.length) {
      return (
        <div>
          <ul className='session-errors'>
            <strong>The following errors occurred:</strong>
            {this.props.errors.session.map((error, i)=> <li key={i * Math.random()} >{error}</li>)}
          </ul>
          <br/>
        </div>
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(SessionErrors);
