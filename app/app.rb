require 'sinatra/base'
require_relative '../data_mapper_setup'
require 'json'

class Chan < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    @message = Post.all
  end

  post '/json/new' do
    @submission = Post.create(post: params[:post_submission])
    p Post.all
  end

  get '/json' do
    @submissions = Post.all
    @api = @submissions.to_json
    erb :api
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
