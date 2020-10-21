class CounterApp < Sinatra::Base
  register Sinatra::Namespace
  enable :sessions

  get '/' do
    erb(:index)
  end
end
