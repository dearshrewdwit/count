## Counter


### Quick Start

```sh
$ git clone git@github.com:dearshrewdwit/count.git && cd count
$ bundle install
$ bundle exec rackup
```

### Count API

A basic API that supports two endpoints.

---
#### Current Count
**Name:** `/api/count`
**Method:** `GET`
**Description:** Returns the current count stored in the application session
Example:
```sh
$ curl localhost:9292/api/count
{"count":"0"}
```
---
#### Set Count
**Name:** `/api/count`
**Method:** `POST`
**Parameters:** `count`
**Description:** Sets the current count stored in the application session to the data sent across in the request using the `count` parameter

Example:
```sh
$ curl -X POST localhost:9292/api/count -d "count=4"
```

### Tests
Uses [rack-test](https://github.com/rack/rack-test) and [includes its helper methods](http://sinatrarb.com/testing.html) to test the API responses.

```sh
$ bundle exec rspec
```
