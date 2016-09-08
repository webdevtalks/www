Fabricator :talk  do
  title       { "#{Faker::Hacker.ingverb.titleize} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}" }
  description { Faker::Lorem.paragraphs.join }
  status      { %i{ accepted proposal rejected }.sample }

  event
  speaker
end
