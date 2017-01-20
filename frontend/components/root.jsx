import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import UserProfileContainer from './profile/user_profile_container';
import DealsIndexContainer from './deals/deals_index_container';
import DealFormContainer from './deals/deal_form_container';
import DealDetailContainer from './deals/deal_detail_container';

const Root = ({ store }) => {
  const _redirectIfLoggedOut = (nextState, replace) => {
    if (store.getState().session.currentUser === null) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={DealsIndexContainer} />
          <Route path='search' component={DealsIndexContainer} />
          <Route path='new-deal' component={DealFormContainer} onEnter={_redirectIfLoggedOut} />
          <Route path='edit-deal/:dealId' component={DealFormContainer} onEnter={_redirectIfLoggedOut} />
          <Route path=':dealId' component={DealDetailContainer} />
          <Route path='users/:userId' component={UserProfileContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
