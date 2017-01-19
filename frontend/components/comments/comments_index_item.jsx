import React from 'react';
import { formatDate } from '../../util/date_api_util';
import { Link } from 'react-router';

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
    if (this.oldText === this.state.body) {
      this.setState({ editMode: false });
      return;
    }

    this.props.updateComment({
      id: this.props.comment.id,
      author_id: this.props.comment.author_id,
      deal_id: this.props.comment.deal_id,
      body: this.state.body
    }).then(() => this.setState({ editMode: false}));
  }

  render() {
    const comment = this.props.comment;
    let editButton;
    if (this.state.editMode) {
      editButton = null;
    } else if (this.props.currentUser && this.props.currentUser.id === comment.author.id) {
      editButton = <button className='comment-edit-button' onClick={this.enableEdit}>Edit</button>;
    }

    let body;
    if (this.state.editMode) {
      body = (
        <form className='comment-edit-form' onSubmit={this.handleSave}>
          <textarea
            maxLength={300}
            onChange={this.handleChange}
            value={this.state.body} />
          <div className='comment-edit-form-actions'>
            <input type='submit' value='Save' />
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      );
    } else {
      body = <p>{comment.body}</p>;
    }

    return (
      <div className='comment' key={comment.id}>
        <div className='comment-info'>
          <Link
            className='comment-author'
            to={`/users/${comment.author.id}`}>
            {comment.author.username}
          </Link>
          <span
            className='comment-date'>
            {formatDate(new Date(comment.updatedAt))}
          </span>
        </div>
        <div className='comment-body'>
          {body}
          {editButton}
        </div>
      </div>
    );
  }
}

export default CommentsIndexItem;
