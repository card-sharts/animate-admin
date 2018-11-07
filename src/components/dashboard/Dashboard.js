import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Essays from './Essays';
import styles from './Dashboard.css';

class Dashboard extends PureComponent {
  state = {
    navBar: false
  };

  toggleNavBar = () => {
    console.log('in function');
    this.setState(({ navBar }) => ({ navBar: !navBar }));
  };

  render() { 
    return (
      <Router>
        <div className={styles.dashboard}>
          <header>
            <button onClick={this.toggleNavBar} className="hamburger">&#9776;</button>
            <h1>Dashboard</h1>
          </header>
          <NavBar navBar={this.state.navBar} id="nav-bar"/>
          <main>
            <Switch>
              <Route exact path="/dashboard/essays" component={Essays}/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
 
export default Dashboard;