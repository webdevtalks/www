Fabricator :speaker do
  name              { Faker::Name.name }
  email             { |f| "#{f[:name].parameterize}@example.org" }
  url               { |f| "https://#{f[:name].parameterize}.example.org" }
  facebook          { |f| "fake_#{f[:name].parameterize}" }
  twitter           { |f| "fake_#{f[:name].parameterize}" }


  title             { [Faker::Name.title, nil].sample }
  organization_name { [Faker::Company.name, nil].sample }

  organization_url  do |f|
    if f[:organization_name]
      ["https://#{f[:organization_name].parameterize}.example.com", nil].sample
    end
  end

  photo_url do
    Faker::Avatar.image(nil, '200x200', 'jpg').gsub('http', 'https')
  end
end
