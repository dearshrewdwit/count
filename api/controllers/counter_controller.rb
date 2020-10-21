class CounterApp < Sinatra::Base
  namespace '/api' do
    get '/count' do
      count = session[:count] || 0.to_s
      status 200

      json count: count
    end

    post '/count' do
      session[:count] = params[:count]
      status 200
    end
  end
end
