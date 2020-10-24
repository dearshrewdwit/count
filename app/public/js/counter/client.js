const Client = () => {
  const get = (url, callback) => {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
  }

  const post = (url, data, callback) => {
    let opts = {
      method: 'POST',
      body: JSON.stringify({ count: data }),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(url, opts).then(() => {
      callback()
    })
  }

  return {
    get: get,
    post: post
  }
}
