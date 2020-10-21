require 'spec_helper'

describe 'Counter Controller' do
  it 'get starts off at 0' do
    get '/api/count'
    parsed_body = JSON.parse(last_response.body)

    expect(last_response).to be_ok
    expect(parsed_body["count"]).to eq '0'
  end

  it 'post returns 200' do
    post '/api/count', { count: 1 }

    expect(last_response.status).to eq 200
  end

  it 'sets count, and then returns the count' do
    post '/api/count', { count: 4 }
    get '/api/count'
    parsed_body = JSON.parse(last_response.body)

    expect(last_response).to be_ok
    expect(parsed_body["count"]).to eq '4'
  end
end
