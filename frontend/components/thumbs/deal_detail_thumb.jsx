import React from 'react';

class DealDetailThumb extends React.Component {
  constructor(props) {
    super(props);
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.thumbsUpImage = this.thumbsUpImage.bind(this);
    this.thumbsDownImage = this.thumbsDownImage.bind(this);
  }

  handleThumbClick(value) {
    if (this.props.currentUser === null) {
      return;
    }

    const id = this.props.thumbData.id;
    const oldValue = this.props.thumbData.value;
    const deal_id = this.props.dealId;
    const user_id = this.props.currentUser.id;

    if (oldValue === value) {
      return () => this.props.deleteThumb(id);
    } else if (oldValue === null) {
      return () => this.props.createThumb({ deal_id, user_id, value });
    } else {
      return () => this.props.updateThumb({ id, value });
    }
  }

  thumbsUpImage() {
    if (this.props.thumbData.value === 1) {
      return 'http://res.cloudinary.com/ssb64/image/upload/e_green:51/v1484614684/up_rdsoqf_ebyz6f.png';
    } else {
      return 'https://res.cloudinary.com/ssb64/image/upload/v1484614684/up_rdsoqf_ebyz6f.png';
    }
  }

  thumbsDownImage() {
    if (this.props.thumbData.value === -1) {
      return 'https://res.cloudinary.com/ssb64/image/upload/e_red:51/v1484614682/down_kf5srn_tffzxt.png';
    } else {
      return 'https://res.cloudinary.com/ssb64/image/upload/v1484614682/down_kf5srn_tffzxt.png';
    }
  }

  render() {
    return (
      <div className='thumbs'>
        <figure>
          <img
            className='upvote'
            onClick={this.handleThumbClick(1)}
            src={this.thumbsUpImage()} />
          <figcaption>Vote Up</figcaption>
        </figure>
        <figure>
          <img
            className='downvote'
            onClick={this.handleThumbClick(-1)}
            src={this.thumbsDownImage()} />
          <figcaption>Vote Down</figcaption>
        </figure>
      </div>
    );
  }
}

export default DealDetailThumb;
