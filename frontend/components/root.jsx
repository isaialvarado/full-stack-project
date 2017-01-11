import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import UserShowContainer from './user_show/user_show_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path='login' onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
          <Route path='signup' onEnter={_redirectIfLoggedIn} component={SessionFormContainer} />
          <Route path='users/:userId' component={UserShowContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
