import React from 'react';

class ErrorMessageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fade: {},
    };
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);
  }

  fadeIn() {
    this.setState({ fade: { opacity: 1 } });
  }

  fadeOut() {
    this.setState({ fade: { opacity: 0 } });
  }

  render() {
    if (!this.props.message) return null;

    if (num === 1) {
      num += 1;
      setTimeout(this.fadeIn, 0);
      setTimeout(this.fadeOut, 1000);
      setTimeout(() => { this.props.close(); num = 1; }, 1500);
    }

    return (
      <div className={`error-message-banner ${ this.props.extraClass }`} style={ this.state.fade } >
        {this.props.message}
      </div>
    );
  }
}

let num = 1;

export default ErrorMessageBanner;
