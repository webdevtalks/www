Fabricator :event do
  date  { Faker::Date.forward                                         }
  theme { "#{Faker::Hacker.adjective.titleize} #{Faker::Hacker.noun}" }

  venue inverse_of: :events
end
