## Counter

A demonstration of a JavaScript frontend that sends requests to a basic Sinatra API, using a simplified component approach.

Deployed at http://count-sheep.herokuapp.com

Exemplifies:
- Making Ajax requests using fetch
- Testing frontend code.
- Separating frontend concerns using a component approach.

If you have a reasonably deep understanding of this code, you should be able to pass a JavaScript junior developer tech test.

### Quick Start

```sh
$ git clone git@github.com:dearshrewdwit/count.git && cd count
$ bundle install
$ bundle exec rackup
$ open http://localhost:9292
```

### Instructions

1. Click the button!
2. Go to step 1.

### Run Tests
#### Frontend

```sh
$ open spec/frontend/SpecRunner.html
```

#### API
Uses [rack-test](https://github.com/rack/rack-test) and [includes its helper methods](http://sinatrarb.com/testing.html) to test the API responses.

```sh
$ bundle exec rspec
```

### User Stories

```
As a shepherd
I can see the number of sheep I've counted back into the pen
So I know if the whole flock is home

As a shepherd
I can increment the number of sheep
So I can record the fact that another sheep has gone into the pen

As a shepherd
I can reopen the app and see my latest count
So I don't lose track of my count if my browser crashes
```


## Count API

A basic API that supports two endpoints.

---
#### Current Count
- **Name:** `/api/count`
- **Method:** `GET`
- **Description:** Returns the current count stored in the application session

Example:
```sh
$ curl localhost:9292/api/count
{"count":"0"}
```
---
#### Set Count
- **Name:** `/api/count`
- **Method:** `POST`
- **Parameters:** `count`
- **Description:** Sets the current count stored in the application session to the data sent across in the request using the `count` parameter

Example:
```sh
$ curl -X POST localhost:9292/api/count -d "count=4"
```
