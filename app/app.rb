require 'sinatra/base'
require_relative '../data_mapper_setup'

class Chan < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    @message = Post.all
    erb :index
  end

  post '/json' do

  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
