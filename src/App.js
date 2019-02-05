import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

export default () => (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
);
