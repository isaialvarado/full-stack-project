import { connect } from 'react-redux';
import { createDeal, updateDeal, fetchDeal } from '../../actions/deals_actions';
import NewDealForm from './new_deal_form';

const mapStateToProps = ({ currentUser, dealDetail, errors }, ownProps) => {
  const formType = ownProps.params.dealId ? 'Update Deal' : 'Create Deal';
  return {
    currentUser,
    dealDetail,
    formType,
    errors: errors.deal
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = ownProps.params.dealId ? updateDeal : createDeal;
  return {
    processForm: deal => dispatch(processForm(deal)),
    fetchDeal: () => dispatch(fetchDeal(ownProps.params.dealId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDealForm);
