import React from 'react';
import DealsIndexItem from './deals_index_item';
import DealsIndexHeader from './deals_index_header';

class DealsIndex extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname === '/') {
      this.props.fetchDeals();
    } else {
      this.props.fetchSearchResults(this.props.search);
    }
    this.props.clearDetail();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== '/search' && newProps.location.pathname === '/search') {
      this.props.fetchSearchResults(newProps.search);
    }
    if (this.props.location.pathname === '/search' && newProps.location.pathname === '/') {
      this.props.fetchDeals();
    }
  }

  render () {
    const deals = this.props.deals.map(deal => (
      <DealsIndexItem deal={deal} key={deal.id} />
    ));

    return (
      <section id='index-container'>
        <DealsIndexHeader path={this.props.location.pathname} />
        <div id='index'>
          {deals}
        </div>
      </section>
    );
  }
}

export default DealsIndex;
