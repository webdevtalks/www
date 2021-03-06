# About

[![travis](https://img.shields.io/travis/webdevtalks/www.svg)](https://travis-ci.org/webdevtalks/www)
[![codeclimate](https://codeclimate.com/github/webdevtalks/www/badges/gpa.svg)](https://codeclimate.com/github/webdevtalks/www)
[![coveralls](https://img.shields.io/coveralls/webdevtalks/www.svg)](https://coveralls.io/github/webdevtalks/www)

# Setup

## Dependencies

- PostgreSQL
- Ruby >= 2.3
- Pow

### Pow

Install pow by:

  $ curl get.pow.cx | sh

## Configure

### Pow

In order to use a http://wwww.webdevtalks.dev testing domain (required to ease oauth login), proceed to:

- Rename directory app as www.webdevtalks
- Run the following:

  $ powder link

This will create a symlink in `~/.pow` pointing to the app.

### App

For installing ruby gem dependencies run:

    $ bundle install

Then, copy `.env.example` and ensure github and google tokens.

Now run:

    $ rake db:setup

You should be ready to go.

Start the app by running:

    $ powder up

Stop powder:

    $ powder down
