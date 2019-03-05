import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import RouteManager from './components/RouteManager';
import routes from './routes';

const App = () => (
  <Router>
    <React.Fragment>
      <NavBar />
      <Switch>
        {routes.map(route => (
          <RouteManager
          key={route.name}
          path={route.path}
          component={route.component}
          exact={route.exact}
          redirectTo={route.redirectTo || '/'}
          routeType={route.routeType} />
        ))}
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
