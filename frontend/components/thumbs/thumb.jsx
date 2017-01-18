import React from 'react';

class Thumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
    this.handleThumbClick = this.handleThumbClick.bind(this);
    this.thumbsUpImage = this.thumbsUpImage.bind(this);
    this.thumbsDownImage = this.thumbsDownImage.bind(this);
  }

  mouseEnter(e) {
    this.setState({ hover: true });
  }

  mouseLeave(e) {
    this.setState({ hover: false });
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
    let thumbType;
    switch (this.props.thumbData.value) {
      case 1:
        thumbType = 'thumbUp';
        break;
      case -1:
        thumbType = 'thumbDown';
        break;
      default:
        thumbType = 'neutralthumb';
    }
    let thumb;
    if (this.state.hover) {
      thumb = (
        <div className='thumbs'>
          <img
            className='thumb1'
            onClick={this.handleThumbClick(1)}
            src={this.thumbsUpImage()} />
          <img
            className='thumb2'
            onClick={this.handleThumbClick(-1)}
            src={this.thumbsDownImage()} />
        </div>
      );
    } else {
      thumb = (
        <div className='thumbs'>
          <img
            src='https://res.cloudinary.com/ssb64/image/upload/v1484614684/up_rdsoqf_ebyz6f.png' />
          <span>{this.props.thumbs}</span>
        </div>
      );
    }
    return (
      <div
        className={thumbType}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        {thumb}
      </div>
    );
  }
}

export default Thumb;
