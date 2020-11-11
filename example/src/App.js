import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';

import Menu1 from './component/menu1/Menu1';
import Menu2 from './component/menu2/Menu2';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="drawer">
          <Menu1 />
          <Menu2 />
        </div>

        <div className="page-container">
          <div className="page">
            <Switch>
              <Route exact path="/page-1">
                <div>Page 1</div>
              </Route>
              <Route exact path="/page-2">
                <div>Page 2</div>
              </Route>
              <Route excat path="/node-2/page-3/general-info">
                <div>General Info</div>
              </Route>
              <Route excat path="/node-2/page-3">
                <Link to="/node-2/page-3/general-info">General Info</Link>
              </Route>

              <Route excat path="/node-1/page-3">
                <div>Page 3</div>
              </Route>
              <Route excat path="/node-1/page-4">
                <div>Page 4</div>
              </Route>
              <Route excat path="/node-1/page-5">
                <div>Page 5</div>
              </Route>
              <Route excat path="/page-6">
                <div>Page 6</div>
              </Route>
              <Route path="*">
                <Redirect to="/page-1" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
