import { connect } from 'react-redux';
import { createDeal, updateDeal } from '../../actions/deals_actions';
import receiveErrors from '../../actions/errors_actions';
import DealForm from './deal_form';

const mapStateToProps = ({ session, dealDetail, errors }, ownProps) => {
  const path = ownProps.location.pathname.slice(1);
  const formType = (path === 'new-deal') ? 'Create Deal' : 'Update Deal';

  return {
    currentUser: session.currentUser,
    errors: errors.deal,
    deal: dealDetail,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname.slice(1);
  const processForm = (path === 'new-deal') ? createDeal : updateDeal;
  return {
    processForm: deal => dispatch(processForm(deal)),
    clearErrors: () => dispatch(receiveErrors({ deal: [] }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealForm);
