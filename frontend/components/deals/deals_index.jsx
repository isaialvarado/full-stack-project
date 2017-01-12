import React from 'react';
import { Link } from 'react-router';

class DealsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <section>
        <h1>Popular Deals</h1>
        <Link to={`/`}>Create Deal</Link>
      </section>
    );
  }
}

export default DealsIndex;
