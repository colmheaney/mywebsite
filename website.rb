require 'rubygems'
require 'bundler/setup'
require 'sinatra'

class Sinatra::Application

	get '/' do
		@title = 'about'
		erb :about
	end

	get '/projects' do
		@title = 'projects'
		erb :projects
	end

	get '/projects/slider' do
		@title = 'slider'
		erb :slider
	end

	get '/projects/chrome_homepage' do
		@title = 'chrome homepage'
		erb :chrome_homepage
	end

	get '/blog' do
		@title = 'blog'
		erb :blog
	end

end