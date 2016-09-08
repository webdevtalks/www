Fabricator :speaker do
  name              { Faker::Name.name }
  email             { Faker::Internet.safe_email }
  twitter           { "fake_#{Faker::Internet.user_name}" }
  title             { [Faker::Name.title, nil].sample }
  organization_name { [Faker::Company.name, nil].sample }

  organization_url  do |attr|
    if attr[:organization_name]
      ["http://example.org/#{attr[:organization_name]}", nil].sample
    end
  end

  photo_url         do
    Faker::Avatar.image(nil, '200x200', 'jpg').gsub('http', 'https')
  end
end
