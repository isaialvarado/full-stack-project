# ShareDeals

[ShareDeals][heroku] is a web application inspired by Slickdeals built using Ruby on Rails and React/Redux.

## Motivation

I enjoy browsing [Slickdeals](https://slickdeals.net/) and have found many good deals through their website. For this reason, I chose this website for my [App Academy](https://www.appacademy.io/) full-stack project.
[heroku]: https://sharedeals.herokuapp.com/#/

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

###### BCrypt

```ruby
def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end
```
###### Active Record Query Interface
```ruby
@deals =
  Deal
    .where('title ~* ?', "\\m#{keywords}\\M")
    .where('price >= ?', min_price.to_f)
    .where('price <= ?', [Float::INFINITY, max_price.to_f].min)
    .order('created_at DESC')
    .limit(25)
```

#### Frontend
- React JavaScript library
- Redux state management library
- npm package manager
- webpack module bundler
- jQuery

###### Controlled Inputs
```JavaScript
handleChange(property) {
  return e => this.setState({[property]: e.target.value});
}
```

###### Ajax request in Redux cycle
```JavaScript
export const fetchDeals = () => (
  $.ajax({
    method: 'GET',
    url: 'api/deals'
  })
);
```

## Project Design

ShareDeals was designed and implemented in less than two weeks based on a proposal that included

* [Original Wireframes][wireframes]
* [Original DB Schema][schema]

[wireframes]: ./docs/wireframes
[schema]: ./docs/schema.md

## Colors

Palette by [Beklad](http://www.colourlovers.com/palette/154705/Panda_vs_Bamboo)
