import React from 'react';
import { formatDate } from '../../util/date_api_util';

class CommentsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.oldText = this.props.comment.body;
    this.state = { editMode: false, body: this.props.comment.body };
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  enableEdit(e) {
    e.preventDefault();
    this.setState({ editMode: true });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ editMode: false });
  }

  handleSave(e) {
    e.preventDefault();
    this.props.updateComment({
      id: this.props.comment.id,
      author_id: this.props.comment.author_id,
      deal_id: this.props.comment.deal_id,
      body: this.state.body
    });
  }

  render() {
    const comment = this.props.comment;
    let editButton;
    if (this.props.currentUser && this.props.currentUser.id === comment.author.id) {
      editButton = <button onClick={this.enableEdit}>Edit</button>;
    }

    let body;
    if (this.state.editMode) {
      body = (
        <form className='comment-body-edit' onSubmit={this.handleSave}>
          <textarea
            onChange={this.handleChange}
            value={this.state.body} />
          <input type='submit' value='Save Changes' />
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      );
    } else {
      body = (
        <div>
          <p className='comment-body'>{comment.body}</p>
          {editButton}
        </div>
      );
    }

    return (
      <div className='comment' key={comment.id}>
        <div className='comment-info'>
          <span>{comment.author.username} - </span>
          <span>{formatDate(new Date(comment.updatedAt))}</span>
        </div>
        {body}
      </div>
    );
  }
}

export default CommentsIndexItem;
