require 'fakeweb'

if ENV['COVER']
  require 'simplecov'
  SimpleCov.start('rails')
end

if ENV['CI']
  require 'coveralls'
  FakeWeb.allow_net_connect = %r[^https?://coveralls.io]
  Coveralls.wear!('rails')
  SimpleCov.formatter = Coveralls::SimpleCov::Formatter
end

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end
end
