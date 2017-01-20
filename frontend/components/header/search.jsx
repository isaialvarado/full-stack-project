import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keywords: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults(this.state.keywords);
  }

  handleChange(e) {
    this.setState({ keywords: e.target.value });
  }

  render() {
    return (
      <div id='search-container'>
        <input
          id='search'
          type='search'
          value={this.state.keywords}
          onChange={this.handleChange}
          placeholder='  Search deals' />
        <button id='search-submit' onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default Search;
