# ShareDeals

[ShareDeals][heroku] is a web application inspired by Slickdeals built using Ruby on Rails and React Redux.

## Motivation

I enjoy browsing [Slickdeals](https://slickdeals.net/) and have found many good deals through their website.

## Features

- User accounts with BCrypt authentication
- User-generated deals (CRUD)
- Up-vote and down-vote deals
- Comments
- Search and filter

###### Screenshot

![ShareDeals search][search_results]

[search_results]: ./docs/images/share_deals_search_results.png "Search Results"
## Technology

#### Backend
- Ruby on Rails
- PostgreSQL
- Heroku hosting
- Cloudinary image hosting via [Cloudinary gem](https://github.com/cloudinary/cloudinary_gem)

###### Active Record Query Interface

Popular deals on front page are based on total thumb score specified in Rails controller.

```ruby
@popular_deals =
  Deal
    .select('deals.id')
    .joins(:thumbs)
    .group('deals.id')
    .having('sum(thumbs.value) > 8')
    .order('deals.created_at DESC')
    .limit(20)
```

Search results are based on whole-word, case-insensitive matches. Default filter values are also added to the query if not present.

```ruby
@deals =
  Deal
    .where('title ~* ?', search_string)
    .where('price >= ?', min_price)
    .where('price <= ?', max_price)
    .where('category ~* ?', category)
    .order('created_at DESC')
    .limit(25)
```

#### Frontend
- React JavaScript library
- Redux state management library
- npm package manager
- webpack module bundler
- jQuery

###### Front-page Thumbs with React

The thumb rendered is based on whether a user enters or leaves the main `<div>` element. A boolean in the component's state is updated appropriately based on the mouse events below.

```JavaScript
return (
  <div
    className={thumbType}
    onMouseEnter={this.mouseEnter}
    onMouseLeave={this.mouseLeave}>
    {thumb}
  </div>
);
```

If a user's mouse cursor enters the `<div>` element, `this.state.hover` is true, and two clickable thumbs appear with their own event handlers.

```JavaScript
let thumb;

if (this.state.hover) {
  thumb = (
    <div className='thumbs'>
      <img
        className='thumb1'
        onClick={this.handleThumbClick(1)}
        src={this.thumbsUpImage()} />
      <img
        className='thumb2'
        onClick={this.handleThumbClick(-1)}
        src={this.thumbsDownImage()} />
    </div>
  );
} else {
  thumb = (
    <div className='thumbs'>
      <img src={this.mainThumbImage()} />
      <span>{this.props.thumbs}</span>
    </div>
  );
}
```

## Project Design

ShareDeals was designed and implemented in less than two weeks based on a proposal that included

* [Original Wireframes][wireframes]
* [Original DB Schema][schema]

[wireframes]: ./docs/wireframes
[schema]: ./docs/schema.md

## Colors

Palette by [Beklad](http://www.colourlovers.com/palette/154705/Panda_vs_Bamboo)
