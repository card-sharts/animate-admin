import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Auth.css';
import { connect } from 'react-redux';
import { signin } from './actions';
import { getUser } from './reducers';

class Auth extends PureComponent {
  state = {
    email: '',
    password: ''
  };

  static propTypes = {
    signin: PropTypes.func.isRequired,
    user: PropTypes.object,
    location: PropTypes.object
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = () => {
    event.preventDefault();
    const { email, password } = this.state;
    if(!email || !password) return;
    this.props.signin(this.state);
  };

  render() { 
    const { email, password } = this.state;
    const { user, location } = this.props;
    const redirect = location.state ? location.state.from : '/dashboard';
    if(user) return <Redirect to={redirect}/>;

    return (
      <section className={styles.auth}>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
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