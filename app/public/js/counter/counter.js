class Counter {
  constructor(element, button, client) {
    this._client = client
    this._element = element
    this._button = button
    this.state = { count: 0 }

    this.getCount = this.getCount.bind(this)
    this.setStateAndRender = this.setStateAndRender.bind(this)

    this._button.addEventListener('click', (event) => {
      event.preventDefault()
      this.state.count++
      this.setCount(this.state.count)
    })

    this.getCount()
  }

  getCount() {
    this._client.get('/api/count', this.setStateAndRender)
  }

  setCount(data) {
    this._client.post('/api/count', data, this.getCount)
  }

  setStateAndRender(data) {
    this.setState(data)
    this.render()
  }

  setState(obj) {
    Object.keys(obj).forEach((prop) => {
      this.state[prop] = obj[prop]
    })
  }

  render() {
    this._element.innerHTML = `<p>${this.state.count}</p>`
  }
}
