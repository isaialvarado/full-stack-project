import React from 'react';
import { Link, withRouter } from 'react-router';
import { DetailThumbContainer } from '../thumbs/thumb_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentsIndex from '../comments/comments_index';
import { formatDate } from '../../util/date_api_util';

class DealDetail extends React.Component {
  constructor(props) {
    super(props);
    this.mainThumbImage = this.mainThumbImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchDeal(this.props.params.dealId);

    if (this.props.location.hash === '#deal-detail-comments') {
      const commentForm = document.getElementById('deal-detail-comments');
      commentForm.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.dealId !== newProps.params.dealId
        || this.props.currentUser !== newProps.currentUser) {
      this.props.fetchDeal(newProps.params.dealId);
    }
  }

  componentWillUnmount() {
    if (event.target.innerHTML !== 'Edit Deal') {
      this.props.clearDetail();
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

    let image = <img id='deal-detail-image' src={deal.cloudUrl} />;
    if (deal.cloudUrl === null) {
      image = (
        <div id='deal-detail-image-placeholder'>
          <h1 id='deal-detail-image-placeholder-text'>ShareDeals</h1>
        </div>
      );
    }

    return (
      <div id='deal-detail-container'>
        <section id='deal-detail-top'>
          <div id='deal-detail'>
            <div id='deal-detail-user-actions'>
              {authorActions}
              <div id='deal-detail-stats'>
                <img
                  src={this.mainThumbImage()} />
                <span>{deal.thumbs}</span>
                <img src='https://res.cloudinary.com/ssb64/image/upload/v1484767766/images_wvzpwm_wq5btl.png' />
                <span>{deal.totalComments}</span>
              </div>
            </div>
            {image}
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
          <div id='deal-detail-description-header'>
            <h1>Description</h1>
            <div>
              <span>{formatDate(new Date(deal.createdAt))} by </span>
              <Link
                className='comment-author'
                to={`/users/${deal.authorId}`}>
                {deal.author}
              </Link>
            </div>
          </div>
          <br />
          <p>{deal.description}</p>
        </div>
        <CommentsIndex comments={deal.comments || {} } />
        <CommentFormContainer dealId={deal.id} />
      </div>
    );
  }
}

export default withRouter(DealDetail);
