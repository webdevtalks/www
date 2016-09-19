Fabricator :talk  do
  title       { "#{Faker::Hacker.ingverb.titleize} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}" }
  description { Faker::Lorem.paragraphs.join }
  status      { %i(draft proposal accepted).sample }

  event   inverse_of: :talks
  speaker inverse_of: :talks
end
