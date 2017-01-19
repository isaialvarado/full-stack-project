import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      body: this.state.body,
      author_id: this.props.currentUser.id,
      deal_id: this.props.dealId
    }).then(() => this.setState({ body: '' }));
  }

  render() {
    if (this.props.currentUser === null) {
      return null;
    } else {
      return (
        <form id='deal-detail-comment-form' onSubmit={this.handleSubmit}>
          <textarea
            placeholder='Type here to comment'
            required
            onChange={this.handleChange} />
          <input
            type='submit'
            value='Add Comment'/>
        </form>
      );
    }
  }
}

export default CommentForm;
