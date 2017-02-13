import { connect } from 'react-redux';
import { createThumb, updateThumb, deleteThumb } from '../../actions/thumbs_actions';
import IndexThumb from './index_thumb';
import DealDetailThumb from './deal_detail_thumb';
import { receiveSessionModal } from '../../actions/session_actions';

const mapStateToProps = ({ session }, ownProps) => {

  const currentUser = session.currentUser ? session.currentUser : null;

  return {
    currentUser,
    thumbs: ownProps.thumbs,
    dealId: ownProps.dealId,
    thumbData: ownProps.thumbData
  };
};

const mapDispatchToProps = dispatch => ({
  createThumb: thumb => dispatch(createThumb(thumb)),
  updateThumb: thumb => dispatch(updateThumb(thumb)),
  deleteThumb: thumbId => dispatch(deleteThumb(thumbId)),
  receiveSessionModal: (options) => dispatch(receiveSessionModal(options))
});

export const ThumbContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexThumb);

export const DetailThumbContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DealDetailThumb);
