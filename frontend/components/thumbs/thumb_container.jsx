import { connect } from 'react-redux';
import { createThumb, updateThumb, deleteThumb } from '../../actions/thumbs_actions';
import Thumb from './thumb';
import DealDetailThumb from './deal_detail_thumb';

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
  deleteThumb: thumbId => dispatch(deleteThumb(thumbId))
});

export const ThumbContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumb);

export const DetailThumbContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DealDetailThumb);
