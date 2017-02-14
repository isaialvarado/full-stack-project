import React from 'react';
import { Link, withRouter } from 'react-router';
import { ThumbContainer } from '../thumbs/thumb_container';

class DealsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let image = <img className='index-item-image' src={this.props.deal.cloudUrl} />;
    if (this.props.deal.cloudUrl === null) {
      image = (
        <div className='index-item-image-placeholder'>
          <h1 className='index-item-image-placeholder-text'>ShareDeals</h1>
        </div>
      );
    }

    return (
      <div key={this.props.deal.id} className='index-item-container'>
        <div
          className='index-item'
          onClick={() => this.props.router.push(`/${this.props.deal.id}`)}>
          <div className='index-item-img-and-vendor'>
            {image}
            <h3 className='index-item-vendor'>{this.props.deal.vendor}</h3>
          </div>
          <h2 className='index-item-title'>{this.props.deal.title}</h2>
          <h1 className='index-item-price'>${this.props.deal.price}</h1>
        </div>
        <div className='index-item-stats'>
          <ThumbContainer
            thumbs={this.props.deal.thumbs}
            dealId={this.props.deal.id}
            thumbData={this.props.deal.thumbData} />
          <div className='comments-container'>
            <Link to={`/${this.props.deal.id}#deal-detail-comments`}>
              <img src='https://res.cloudinary.com/ssb64/image/upload/v1484767766/images_wvzpwm_wq5btl.png' />
            </Link>
            <span>{this.props.deal.totalComments}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DealsIndexItem);
