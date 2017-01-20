import React from 'react';

class DealsIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header;
    if (this.props.path === '/') {
      header = <h1 id='index-header'>Popular Deals</h1>;
    } else {
      header = <h1>Hello from Search Results</h1>;
    }

    return (
      <div>
        {header}
      </div>
    );
  }
}

export default DealsIndexHeader;
