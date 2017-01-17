import React from 'react';
import { withRouter } from 'react-router';

class DealDetail extends React.Component {
  componentDidMount() {
    this.props.fetchDeal(this.props.params.dealId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.dealId !== newProps.params.dealId) {
      this.props.fetchDeal(newProps.params.dealId);
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
                <h2>thumbs {deal.thumbs}</h2>
                <h2>comments</h2>
              </div>
            </div>
            <img src={deal.cloudUrl} />
            <h1 id='deal-detail-title'>{deal.title}</h1>
            <h2 id='deal-detail-price'>${deal.price} at {deal.vendor}</h2>
            <a id='buy-now' href={deal.dealUrl}>Buy Now</a>
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
