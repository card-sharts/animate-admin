import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

class NavBar extends PureComponent {
  render() { 
    return (
      <nav className={styles.essays}>
        <ul>
          <li><Link to="/essays">Essays</Link></li>
          <li><Link to="/test">Test</Link></li>
          <li><Link to="/anotherTest">Another Test</Link></li>
        </ul>
      </nav>
    );
  }
}
 
export default NavBar;