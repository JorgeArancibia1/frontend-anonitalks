import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { LoginScreen } from '../auth/LoginScreen';
import { HomeScreen } from '../anonitalks/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ LoginScreen } />
          <Route exact path="/" component={ HomeScreen } />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
