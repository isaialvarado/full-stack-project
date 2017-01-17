import React from 'react';
import { Link, withRouter } from 'react-router';
import Thumb from './thumbs';

const DealsIndexItem = ({ deal, router }) => (
  <div key={deal.id} className='index-item-container'>
    <div className='index-item' onClick={() => router.push(`/${deal.id}`)}>
      <div className='index-item-img-and-vendor'>
        <img src={deal.cloudUrl} />
        <h3 className='index-item-vendor'>{deal.vendor}</h3>
      </div>
      <h2 className='index-item-title'>{deal.title}</h2>
      <h1 className='index-item-price'>${deal.price}</h1>
    </div>
    <div className='index-item-stats'>
      <Thumb thumbs={deal.thumbs} />
      <div className='comments-container'>
        <h4>Comments</h4>
      </div>
    </div>
  </div>
);

class DealsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDeals();
  }

  render () {
    const deals = this.props.deals.map(deal => (
      <DealsIndexItem deal={deal} router={this.props.router} key={deal.id} />
    ));

    return (
      <section id='index-container'>
        <h1 id='index-header'>Popular Deals</h1>
        <div id='index'>
          {deals}
        </div>
      </section>
    );
  }
}

export default withRouter(DealsIndex);
