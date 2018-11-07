import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.css';

class NavBar extends PureComponent {

  static propTypes = {
    navBar: PropTypes.bool.isRequired
  };

  render() { 
    return (
      <div className={styles.navBar}>
        <nav className={this.props.navBar ? 'open' : 'closed' }>
          <NavLink to="/dashboard/my-profile">Profile</NavLink>
          <NavLink to="/dashboard/essays">Essays</NavLink>
          <NavLink to="/test">Test</NavLink>
          <NavLink to="/anotherTest">Another Test</NavLink> 
        </nav>
      </div>
    );
  }
}
 
export default NavBar;