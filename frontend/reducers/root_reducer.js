import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import dealsReducer from './deals_reducer';
import dealDetailReducer from './deal_detail_reducer';
import userProfileReducer from './user_profile_reducer';
import searchReducer from './search_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  deals: dealsReducer,
  dealDetail: dealDetailReducer,
  userProfile: userProfileReducer,
  search: searchReducer
});

export default rootReducer;
