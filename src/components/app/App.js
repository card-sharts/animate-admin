import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Auth from '../auth/Auth';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Auth}/>
            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;