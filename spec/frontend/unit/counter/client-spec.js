let client, callback, data, opts, mockResponse, mockJsonPromise, mockFetchPromise;

describe('Client', () => {
  beforeEach(() => {
    client = Client()
  })

  describe('get', () => {
    beforeEach(() => {
      callback = jasmine.createSpy("callback")
      mockResponse = { count: 3 }
      mockJsonPromise = Promise.resolve(mockResponse)
      mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise
      })

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)
    })

    it('calls fetch with url', () => {
      client.get('/api/count', callback)

      expect(fetch).toHaveBeenCalledWith('/api/count')
    })

    it('calls callback with data', () => {
      return client.get('/api/count', callback)
        .then(() => {
          expect(callback).toHaveBeenCalledWith(mockResponse)
        })
    })
  })

  describe('post', () => {
    beforeEach(() => {
      data = { count: 4 }
      opts = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }

      callback = jasmine.createSpy("callback")
      let mockFetchPromise = Promise.resolve(callback)

      spyOn(window, "fetch")
        .and
        .callFake(() => mockFetchPromise)
    })

    it('calls fetch with url, data', () => {
      client.post('/api/count', data, callback)

      expect(fetch).toHaveBeenCalledWith('/api/count', opts)
    })

    it('calls callback', () => {
      return client.post('/api/count', data, callback)
        .then(() => {
          expect(callback).toHaveBeenCalled()
        })
    })
  })
})
