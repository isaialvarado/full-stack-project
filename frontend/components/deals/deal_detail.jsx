import React from 'react';
import { withRouter } from 'react-router';
import { DetailThumbContainer } from '../thumbs/thumb_container';

class DealDetail extends React.Component {
  componentDidMount() {
    this.props.fetchDeal(this.props.params.dealId);
    this.mainThumbImage = this.mainThumbImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.dealId !== newProps.params.dealId
        || this.props.currentUserId !== newProps.currentUserId) {
      this.props.fetchDeal(newProps.params.dealId);
    }
  }

  mainThumbImage() {
    if (this.props.dealDetail.thumbs >= 0) {
      return 'https://res.cloudinary.com/ssb64/image/upload/v1484614684/up_rdsoqf_ebyz6f.png';
    } else {
      return 'https://res.cloudinary.com/ssb64/image/upload/v1484614682/down_kf5srn_tffzxt.png';
    }
  }

  render() {
    const currentUser = this.props.currentUser;
    const deal = this.props.dealDetail;

    let authorActions;
    if (currentUser && currentUser.id === deal.authorId) {
      authorActions = (
        <div id='deal-detail-author-actions'>
          <button
            onClick={() => this.props.router.push(`/edit-deal/${deal.id}`)}>
            Edit Deal
          </button>
          <button
            onClick={() => this.props.deleteDeal(deal.id)
              .then(this.props.router.push('/'))}>
            Delete Deal
          </button>
        </div>
      );
    }

    return (
      <div>
        <section id='deal-detail-top'>
          <div id='deal-detail'>
            <div id='deal-detail-user-actions'>
              {authorActions}
              <div id='deal-detail-stats'>
                <img
                  src={this.mainThumbImage()} />
                <span>{deal.thumbs}</span>
                <h2>comments</h2>
              </div>
            </div>
            <img id='deal-detail-image' src={deal.cloudUrl} />
            <h1 id='deal-detail-title'>{deal.title}</h1>
            <h2 id='deal-detail-price-and-vendor'>
              <span id='deal-detail-price'>${deal.price}</span>
              <span id='deal-detail-vendor'> at {deal.vendor}</span>
            </h2>
            <a id='see-deal' href={deal.dealUrl}>See Deal</a>
            <DetailThumbContainer dealId={deal.id} thumbData={deal.thumbData} />
          </div>
        </section>
        <div id='deal-detail-description'>
          <h1>Description</h1>
          <br />
          <p>{deal.description}</p>
        </div>
        <div id='deal-detail-comments'>
          <h1>Comments</h1>
          <br />
          <p></p>
        </div>
      </div>
    );
  }
}

export default withRouter(DealDetail);
