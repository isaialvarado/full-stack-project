# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Deals

- `GET /api/deals/`
- `POST /api/deals`
- `GET /api/deals/:id`
- `PATCH /api/deals/:id`
- `DELETE /api/deals/:id`

### Thumbs

- `POST /api/deals/:id/thumbs`
- `PATCH /api/deals/:id/thumbs`

### Comments

- `POST /api/deals/:id/comments`
