import React from 'react';
import { withRouter } from 'react-router';

class DealForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.deal.title,
      description: props.deal.description,
      price: props.deal.price,
      deal_url: props.deal.dealUrl,
      image_url: props.deal.imageUrl || '',
      category: props.deal.category,
      vendor: props.deal.vendor
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    if (this.props.formType === 'Create Deal') {
      this.setState({
        title: '',
        description: '',
        price: '',
        deal_url: '',
        image_url: '',
        category: '',
        vendor: ''
      });
    } else if (this.props.currentUser.id !== this.props.deal.authorId) {
      this.props.router.push('/');
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.formType !== 'Create Deal' && newProps.formType === 'Create Deal') {
      this.props.clearErrors();
      this.setState({
        title: '',
        description: '',
        price: '',
        deal_url: '',
        image_url: '',
        category: '',
        vendor: ''
      });
    } else if (newProps.formType === 'Update Deal' && newProps.currentUser.id !== newProps.deal.authorId) {
      this.props.router.push('/');
    }
  }

  handleChange(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    const submitButton = document.getElementById('deal-form-submit');
    submitButton.disabled = true;
    submitButton.value = 'Please wait. Creating deal...';
    e.preventDefault();
    const deal = Object.assign(
      this.state,
      { author_id: this.props.currentUser.id },
      { id: this.props.deal.id }
    );
    this.props.processForm(deal)
      .then(res => this.props.router.push(`/${res.deal.id}`))
      .always(() => { submitButton.disabled = false; });
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
    const CATEGORIES = [
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

    const categoryInputs = CATEGORIES.map(category => (
      <option key={category} value={category}>{category}</option>
    ));

    const categorySelectInput = (
      <select id='category' value={this.state.category || 'default'} onChange={this.handleChange('category')}>
        <option value="default" disabled>Select Category</option>
        {categoryInputs}
      </select>
    );

    return (
      <div id='deal-form-container'>
        <div id='deal-form-background'>
          <form id='deal-form' onSubmit={this.handleSubmit}>
            <h1>{formType}</h1>
            <br />
            {this.renderErrors()}

            <label htmlFor='title'>Title</label>
              <input
                id='title'
                type='text'
                maxLength='70'
                required
                value={this.state.title}
                onChange={this.handleChange('title')} />
            <br />

            <label htmlFor='description'>Description</label>
              <textarea
                id='description'
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
                type='text'
                placeholder='http:// or https://'
                required
                value={this.state.deal_url}
                onChange={this.handleChange('deal_url')} />
            <br />

            <label htmlFor='imageUrl'>Image URL (Optional)</label>
              <input
                id='imageUrl'
                type='text'
                value={this.state.image_url}
                onChange={this.handleChange('image_url')} />
            <br />

            <label htmlFor='category'>Category</label>
              {categorySelectInput}
            <br />

            <label htmlFor='Vendor'>Vendor/Store</label>
              <input
                id='Vendor'
                type='text'
                required
                value={this.state.vendor}
                onChange={this.handleChange('vendor')} />
            <br />

            <input id='deal-form-submit' type='submit' value={formType} />
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(DealForm);
