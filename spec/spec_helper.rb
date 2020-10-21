# require 'capybara/rspec'
require 'json'

require './api/app'
require_relative 'support/rack_test'

# Capybara.app = CounterApp

RSpec.configure do |config|
  if config.files_to_run.one?
    config.default_formatter = "doc"
  end

  config.order = :random
end
