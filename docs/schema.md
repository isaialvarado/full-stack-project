# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## deals
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
price        | float      | not null
rating        | integer      | not null
vendor        | string      | not null
category        | string      | not null
deal_url        | text      | not null
image_url        | text      |
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body | text    | not null
author_id   | integer   | not null, foreign key (references users), indexed
deal_id   | integer   | not null, foreign key (references deals), indexed
