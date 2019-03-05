import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import routes from './routes';

const App = () => (
  <Router>
    <React.Fragment>
      <NavBar />
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
      <Footer />
    </React.Fragment>
  </Router>
);

export default App;
