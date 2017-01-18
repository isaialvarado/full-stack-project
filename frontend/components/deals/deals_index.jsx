import React from 'react';
import DealsIndexItem from './deals_index_item';

class DealsIndex extends React.Component {
  componentDidMount() {
    this.props.fetchDeals();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.currentUserId !== newProps.currentUserId) {
      this.props.fetchDeals();
    }
  }

  render () {
    const deals = this.props.deals.map(deal => (
      <DealsIndexItem deal={deal} key={deal.id} />
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

export default DealsIndex;
