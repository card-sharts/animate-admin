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
        <section className={styles.dashboard}>
          <header>
            <h1>Dashboard</h1>
          </header>
          <NavBar/>
          <main>
            <Switch>
              <Route exact path="/essays" component={Essays}/>
            </Switch>
          </main>
        </section>
      </Router>
    );
  }
}
 
export default Dashboard;