Fabricator :talk do

  description { Faker::Lorem.paragraphs.join }
  status      { %i(draft proposal accepted).sample }

  title do
    verb      = Faker::Hacker.ingverb.titleize
    adjective = Faker::Hacker.adjective
    noun      = Faker::Hacker.noun

    [verb, adjective, noun].join(' ')
  end

  event   inverse_of: :talks
  speaker inverse_of: :talks

end
