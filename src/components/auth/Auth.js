import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Auth.css';
import { connect } from 'react-redux';
import { signin } from './actions';
import { getUser } from './reducers';

class Auth extends PureComponent {
  state = {
    name: '',
    password: ''
  };

  static propTypes = {
    signin: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { name, password } = this.state;
    if(!name || !password) return;
    this.props.signin(this.state);
  };

  render() { 
    const { name, password } = this.state;

    return (
      <section className={styles.auth}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="username"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
            required
          />
          <button>Sign In</button>
        </form>
      </section>
    );
  }
}
 
export default connect(
  state => ({
    user: getUser(state)
  }),
  { signin }
)(Auth);