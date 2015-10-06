require 'sinatra/base'
require_relative '../data_mapper_setup'
require 'json'

class Chan < Sinatra::Base
  use Rack::MethodOverride

  get '/' do
    @message = Post.all
    erb :index
  end

  post '/json/new' do
    @submission = Post.new
    @submission.post = params[:post_submission]
  end

  get '/json' do
    @submissions = Post.all
    @submissions.to_json
  end

  # start the server if ruby file executed directly
  run! if app_file == $0
end
