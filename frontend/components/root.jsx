import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import { Router, Route, IndexRoute, hashHistory, onEnter } from 'react-router';
import UserProfileContainer from './profile/user_profile_container';
import DealsIndexContainer from './deals/deals_index_container';
import NewDealFormContainer from './deals/new_deal_form_container';
import DealDetailContainer from './deals/deal_detail_container';

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
          <Route path='new-deal' component={NewDealFormContainer} />
          <Route path=':dealId' component={DealDetailContainer} />
          <Route path='users/:userId' component={UserProfileContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
