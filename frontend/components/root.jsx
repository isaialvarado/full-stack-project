import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import UserProfileContainer from './profile/user_profile_container';
import DealsIndexContainer from './deals/deals_index_container';

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
          <IndexRoute component={DealsIndexContainer} />
          <Route path='users/:userId' component={UserProfileContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
