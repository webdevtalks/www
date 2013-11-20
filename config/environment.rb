# Load the Rails application.
require File.expand_path('../application', __FILE__)

unless Rails.env.production?
  require 'dotenv'

  # Load all enviroment variables
  Dotenv.load
end

# Initialize the Rails application.
WDT::Application.initialize!
