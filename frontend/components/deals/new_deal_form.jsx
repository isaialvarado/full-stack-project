import React from 'react';

class NewDealForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.dealDetail.title,
      description: props.dealDetail.description,
      price: props.dealDetail.price,
      deal_url: props.dealDetail.dealUrl,
      image_url: props.dealDetail.imageUrl,
      category: props.dealDetail.category,
      vendor: props.dealDetail.vendor
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Update Deal') {
      this.props.fetchDeal();
    }
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const deal = Object.assign(
      this.state,
      { author_id: this.props.current_user.id }
    );
    this.props.processForm(deal);
  }

  renderErrors() {
    return (
      <ul id='deal-errors'>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const formType = this.props.formType;

    return (
      <div id='new-deal-form-container'>
        <form id='new-deal-form' onSubmit={this.handleSubmit}>
          <h1>{formType}</h1>
          <br />
          {this.renderErrors()}

          <label htmlFor='title'>Title</label>
            <input
              id='title'
              type='text'
              required
              value={this.state.title}
              onChange={this.handleChange('title')} />
          <br />

          <label htmlFor='description'>Description</label>
            <input
              id='description'
              type='textarea'
              required
              value={this.state.description}
              onChange={this.handleChange('description')} />
          <br />

          <label htmlFor='price'>Price</label>
            <input
              id='price'
              type='number'
              required
              step='0.01'
              value={this.state.price}
              onChange={this.handleChange('price')} />
          <br />

          <label htmlFor='dealUrl'>Deal URL</label>
            <input
              id='dealUrl'
              type='textarea'
              required
              value={this.state.dealUrl}
              onChange={this.handleChange('dealUrl')} />
          <br />

          <label htmlFor='imageUrl'>Image URL</label>
            <input
              id='imageUrl'
              type='textarea'
              value={this.state.imageUrl}
              onChange={this.handleChange('imageUrl')} />
          <br />

          <label htmlFor='category'>Category</label>
            <input
              id='category'
              required
              value={this.state.category}
              onChange={this.handleChange('category')} />
          <br />

          <label htmlFor='Vendor'>Vendor/Store</label>
            <input
              id='Vendor'
              required
              value={this.state.Vendor}
              onChange={this.handleChange('Vendor')} />
          <br />

          <input type='submit' value={formType} />
        </form>
      </div>
    );
  }
}

export default NewDealForm;
