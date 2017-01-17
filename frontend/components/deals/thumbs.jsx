import React from 'react';

class Thumb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter(e) {
    e.stopPropagation();
    this.setState({ hover: true });
  }

  mouseLeave(e) {
    e.stopPropagation();
    this.setState({ hover: false });
  }

  render() {
    let thumb;
    if (this.state.hover) {
      thumb = (
        <div className='thumb'>
          <img
            className='thumbup'
            src='http://res.cloudinary.com/ssb64/image/upload/v1484614684/up_rdsoqf_ebyz6f.png' />
          <img
            className='thumbdown'
            src='http://res.cloudinary.com/ssb64/image/upload/v1484614682/down_kf5srn_tffzxt.png' />
        </div>
      );
    } else {
      thumb = (
        <div className='thumb'>
          <img
            className='thumbup'
            src='http://res.cloudinary.com/ssb64/image/upload/v1484614684/up_rdsoqf_ebyz6f.png' />
          <span>{this.props.thumbs}</span>
        </div>
      );
    }
    return (
      <div
        className='thumb-container'
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        {thumb}
      </div>
    );
  }
}

export default Thumb;
