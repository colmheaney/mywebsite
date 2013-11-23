require 'rubygems'
require 'sinatra'

get '/' do
	@title = 'about'
	erb :about
end

get '/projects' do
	@title = 'projects'
	erb :projects
end

get '/blog' do
	@title = 'blog'
	erb :blog
end