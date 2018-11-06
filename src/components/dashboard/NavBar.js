import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.css';

class NavBar extends PureComponent {
  render() { 
    return (
      <nav className={styles.essays}>
        <ul>
          <li><NavLink to="/dashboard/essays"><p>Essays</p></NavLink></li>
          <li><NavLink to="/test"><p>Test</p></NavLink></li>
          <li><NavLink to="/anotherTest"><p>Another Test</p></NavLink></li>
        </ul>
      </nav>
    );
  }
}
 
export default NavBar;