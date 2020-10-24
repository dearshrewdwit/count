require 'spec_helper'

describe 'API' do
  describe 'Counter Controller' do
    context 'get' do
      it 'counter starts off at 0' do
        get '/api/count'
        parsed_body = JSON.parse(last_response.body)

        expect(last_response).to be_ok
        expect(parsed_body["count"]).to eq '0'
      end

      it 'after new count, retrieves the count' do
        count = '4'
        post '/api/count', { count: count }.to_json
        get '/api/count'
        parsed_body = JSON.parse(last_response.body)

        expect(last_response).to be_ok
        expect(parsed_body["count"]).to eq count
      end
    end

    context 'post' do
      it 'returns 200' do
        post '/api/count', { count: '1' }.to_json

        expect(last_response.status).to eq 200
      end
    end
  end
end
