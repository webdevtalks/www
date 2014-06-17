# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Sets environment variables from .env file.
Dotenv.load

# Initialize the Rails application.
WDT::Application.initialize!
