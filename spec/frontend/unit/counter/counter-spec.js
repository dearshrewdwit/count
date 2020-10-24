let counter, mockElement, mockButton, mockClient;

beforeEach(() => {
  mockElement = {}
  mockButton = {
    addEventListener: () => null
  }
  mockClient = {
    get: () => null,
    post: () => null
  }
  spyOn(mockClient, "get")
  counter = new Counter(mockElement, mockButton, mockClient)
})

describe('Counter', () => {
  describe('getCount', () => {
    it('calls client get with callback', () => {
      counter.getCount()
      expect(mockClient.get).toHaveBeenCalledWith('/api/count', counter.setStateAndRender)
    })
  })

  describe('setCount', () => {
    it('calls client post with value and callback', () => {
      spyOn(mockClient, "post")
      counter.setCount(4)
      expect(mockClient.post).toHaveBeenCalledWith('/api/count', {count: 4}, counter.getCount)
    })
  })

  describe('setStateAndRender', () => {
    it('sets element inner html', () => {
      counter.setStateAndRender({count: 5})
      expect(mockElement.innerHTML).toBe("<p>5</p>")
    })

    it('calls setState', () => {
      let state = {count: 5}
      spyOn(counter, "setState")
      counter.setStateAndRender(state)
      expect(counter.setState).toHaveBeenCalledWith(state)
    })

    it('calls render', () => {
      let state = {count: 5}
      spyOn(counter, "render")
      counter.setStateAndRender({count: 5})
      expect(counter.render).toHaveBeenCalled()
    })
  })

  describe('setState', () => {
    it('sets state object', () => {
      counter.setState({test: 5})
      expect(counter.state.test).toBe(5)
    })

    it('sets state object with multiple props', () => {
      let state = {
        a: 5,
        b: 6
      }
      counter.setState(state)
      expect(counter.state.a).toBe(5)
      expect(counter.state.b).toBe(6)
    })
  })

  describe('render', () => {
    it('sets element html', () => {
      counter.render()
      expect(mockElement.innerHTML).toBe("<p>0</p>")
    })
  })
})
