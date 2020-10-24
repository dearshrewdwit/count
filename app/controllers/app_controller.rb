class CounterApp < Sinatra::Base
  register Sinatra::Namespace
  set :root, File.dirname(File.expand_path('..', __FILE__))
  enable :sessions

  get '/' do
    erb(:index)
  end
end
