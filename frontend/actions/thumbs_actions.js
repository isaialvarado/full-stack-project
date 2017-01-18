import * as ThumbsAPIUtil from '../util/thumbs_api_util';

export const RECEIVE_THUMB = 'RECEIVE_THUMB';
export const REMOVE_THUMB = 'REMOVE_THUMB';

export const receiveThumb = thumb => ({
  type: RECEIVE_THUMB,
  thumb
});

export const removeThumb = thumb => ({
  type: REMOVE_THUMB,
  thumb
});

export const createThumb = thumb => dispatch => (
  ThumbsAPIUtil.createThumb(thumb)
    .then(newThumb => dispatch(receiveThumb(newThumb)))
);

export const updateThumb = thumb => dispatch => (
  ThumbsAPIUtil.updateThumb(thumb)
    .then(updatedThumb => dispatch(receiveThumb(updatedThumb)))
);

export const deleteThumb = thumbId => dispatch => (
  ThumbsAPIUtil.deleteThumb(thumbId)
    .then(thumb => dispatch(removeThumb(thumb)))
);
