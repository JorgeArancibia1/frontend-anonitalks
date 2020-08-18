import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { PostsScreen } from '../screens/PostsScreen';
import { startChecking } from '../../actions/authAction';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {

  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch( startChecking() );
  }, [dispatch])

  if ( checking ) {
    return <h5>Espere...</h5>
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact 
            path="/login" 
            component={ LoginScreen } 
            isAuthenticated={!!uid}
          />
          <PublicRoute 
            exact 
            path="/signup" 
            component={ RegisterScreen }
            isAuthenticated={!!uid}
          />
          <PrivateRoute 
            exact 
            path="/posts" 
            component={ PostsScreen }
            isAuthenticated={!!uid}
          />
          <PrivateRoute 
            exact 
            path="/posts/add" 
            component={ PostsScreen }
            isAuthenticated={!!uid}
          />
          <PrivateRoute
            exact 
            path="/" 
            component={ HomeScreen } 
            isAuthenticated={!!uid}
          />

          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}
