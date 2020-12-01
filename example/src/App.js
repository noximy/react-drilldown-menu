import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Menu1 from './component/menu1/Menu1';
import Settings from './component/settings/Settings';

import { links } from './routes';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="drawer">
          <Menu1 />
        </div>

        <div className="page-container">
          <div className="page">
            <Switch>
              <Route exact path="/settings/tab-1">
                <Settings />
                Settings Tab 1
              </Route>
              <Route exact path="/settings/tab-2">
                <Settings />
                Settings Tab 2
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>

              {links.map((link) => (
                <Route key={link} exact path={link}>
                  {link}
                </Route>
              ))}
              <Route path="*">
                <Redirect to={links[0]} />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
