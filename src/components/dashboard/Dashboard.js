import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Essays from './Essays';
import styles from './Dashboard.css';

class Dashboard extends PureComponent {
  state = {  };

  render() { 
    return (
      <Router>
        <div className={styles.dashboard}>
          <header>
            <h1>Dashboard</h1>
          </header>
          <NavBar id="nav-bar"/>
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