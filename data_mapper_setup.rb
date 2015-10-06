require 'data_mapper'
require 'dm-validations'

env = ENV['RACK_ENV'] || 'development'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/5chan_#{env}")

# require models underneath me
require './app/models/post'

DataMapper.finalize

DataMapper.auto_upgrade!
