import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 0,
      category: 'All',
      minPrice: 0,
      maxPrice: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchResults({
      keywords: this.props.search,
      filter: this.state
    });
  }

  resetFilter() {
    this.setState({
      minRating: 0,
      category: 'All',
      minPrice: 0,
      maxPrice: ''
    });
  }

  render() {
    const categories = [
      'Books & Magazines',
      'Clothing, Shoes & Accessories',
      'Entertainment',
      'Grocery',
      'Health & Beauty',
      'Movies',
      'Office & School Supplies',
      'Other',
      'Restaurants',
      'Sporting Goods',
      'Tech & Electronics',
      'Travel',
      'Video Games'
    ];

    const categoryInputs = categories.map(category => (
      <option key={category} value={category}>{category}</option>
    ));

    const categorySelectInput = (
      <select id='category' value={this.state.category} onChange={this.handleChange('category')}>
        <option value="All">All</option>
        {categoryInputs}
      </select>
    );

    return (
      <div id='filter-form-container'>
        <h1 className='index-header'>Filter</h1>
        <form id='filter-form' onSubmit={this.handleSubmit}>
          <div id='filter-options'>
            <label htmlFor='rating'>Min Rating</label>
            <input
              id='rating'
              type='number'
              step='1'
              min='0'
              value={this.state.minRating}
              onChange={this.handleChange('minRating')} />
            <label htmlFor='minPrice'>Min Price</label>
            <input
              id='minPrice'
              type='number'
              min='0'
              step='0.01'
              value={this.state.minPrice}
              onChange={this.handleChange('minPrice')} />
            <label htmlFor='maxPrice'>Max Price</label>
            <input
              id='maxPrice'
              type='number'
              min='0'
              step='0.01'
              value={this.state.maxPrice}
              onChange={this.handleChange('maxPrice')} />
            <label htmlFor='category'>Category</label>
            {categorySelectInput}
          </div>
          <div id='filter-form-actions'>
            <input id='filter-apply' value='Apply Filter' type='submit' />
            <button id='filter-reset' onClick={this.resetFilter}>Reset Filter</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Filter;
