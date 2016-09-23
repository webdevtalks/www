Fabricator :sponsor do

  image   { Faker::Company.logo }
  name    { Faker::Company.name }
  twitter { |f| f[:name].parameterize }
  website { |f| "http://example.org/#{f[:name].parameterize}" }

end
