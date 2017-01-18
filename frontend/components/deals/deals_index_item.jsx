import React from 'react';
import { withRouter } from 'react-router';
import { ThumbContainer } from '../thumbs/thumb_container';

class DealsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div key={this.props.deal.id} className='index-item-container'>
        <div className='index-item' onClick={() => this.props.router.push(`/${this.props.deal.id}`)}>
          <div className='index-item-img-and-vendor'>
            <img src={this.props.deal.cloudUrl} />
            <h3 className='index-item-vendor'>{this.props.deal.vendor}</h3>
          </div>
          <h2 className='index-item-title'>{this.props.deal.title}</h2>
          <h1 className='index-item-price'>${this.props.deal.price}</h1>
        </div>
        <div className='index-item-stats'>
          <ThumbContainer thumbs={this.props.deal.thumbs} dealId={this.props.deal.id} thumbData={this.props.deal.thumbData} />
          <div className='comments-container'>
            <img src='https://res.cloudinary.com/ssb64/image/upload/v1484767766/images_wvzpwm_wq5btl.png' />
            <span>{this.props.deal.totalComments}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DealsIndexItem);
