let client, callback

beforeEach(() => {
  client = Client()
})

describe('Client', () => {
  describe('get', () => {
    it('calls fetch with url', () => {
      callback = jasmine.createSpy("callback")
      let serverResponse = { count: 2 }
      let mockJsonPromise = Promise.resolve(callback(serverResponse))
      let mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })
      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)

      client.get('/api/count', callback)

      expect(fetch).toHaveBeenCalledWith('/api/count')
    })

    it('calls callback with data', () => {
      callback = jasmine.createSpy("cb")
      let mockResponse = { count: 3 }
      let mockJsonPromise = Promise.resolve(callback(mockResponse))
      let mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)

      client.get('/api/count', callback)

      expect(callback).toHaveBeenCalledWith(mockResponse)
    })
  })

  describe('post', () => {
    it('calls fetch with url, data', () => {
      let data = 4
      let opts = {
        method: 'POST',
        body: JSON.stringify({ count: data }),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      callback = jasmine.createSpy("cb")
      let mockFetchPromise = Promise.resolve(callback())

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)

      client.post('/api/count', data, callback)

      expect(fetch).toHaveBeenCalledWith('/api/count', opts)
    })

    it('calls callback', () => {
      callback = jasmine.createSpy("cb")
      let mockFetchPromise = Promise.resolve(callback())

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)

      let data = 4
      client.post('/api/count', data, callback)

      expect(callback).toHaveBeenCalled()
    })
  })
})
