import React from 'react';
import { withRouter } from 'react-router-dom';

class LeftSideBarHeader extends React.Component {
  render () {
    const highlight = {
      borderLeft: '6px solid #5bc5a7',
      color: '#5bc5a7',
    };
    let imageHighlight = {};
    let highlight1 = {};
    let highlight2 = {};
    let highlight3 = {};
    if ((this.props.location.pathname) === '/dashboard') {
      highlight1 = highlight;
      imageHighlight = { backgroundPositionX: '0' };
    } else if ((this.props.location.pathname) === '/activity') {
      highlight2 = highlight;
    } else if ((this.props.location.pathname) === '/all') {
      highlight3 = highlight;
    }
    return (
      <div className='left-side-bar-header' >
        <li style={ highlight1 } onClick={ () => (
            this.props.history.push('/dashboard')) } >
          <i style={ imageHighlight } />
          <a> Dashboard</a>
        </li>
        <li style={ highlight2 } onClick={ () => (
            this.props.history.push('/activity')) } >
          <i className="fas fa-flag" />
          <a> Recent Activity</a>
        </li>
        <li style={ highlight3 } onClick={ () => (
            this.props.history.push('/all')) } >
          <i className="fas fa-list-ul" />
          <a> All expenses</a>
        </li>
      </div>
    );
  }
}

export default withRouter(LeftSideBarHeader);
