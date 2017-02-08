Fabricator :speaker do

  name              { Faker::Name.name }

  email             { |f| "#{f[:name].parameterize}@example.org" }
  facebook          { |f| ["fake_#{f[:name].parameterize}", nil].sample }

  organization_name { [Faker::Company.name, nil].sample }

  organization_url do |f|
    o = f[:organization_name]
    o ? ["https://#{o.parameterize}.example.com", nil].sample : nil
  end

  photo_url         { Faker::Avatar.image.sub('http', 'https') }
  title             { [Faker::Name.title, nil].sample }
  twitter           { |f| ["fake_#{f[:name].parameterize}", nil].sample }

  url do |f|
    ["https://#{f[:name].parameterize}.example.org", nil].sample
  end

end

Fabricator :speaker_with_talks, from: :speaker do
  after_create do |speaker, _|
    speaker.talks << Fabricate(:talk, speaker: speaker, status: 'accepted')
  end
end
