import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.css';

class Auth extends PureComponent {
  state = {
    name: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { name, password } = this.state;

    return (
      <section className={styles.auth}>
        <form>
          <input name="name" value={name} onChange={this.handleChange} placeholder="username"/>
          <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="password"/>
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}
 
export default Auth;