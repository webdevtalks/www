Fabricator(:sponsor) do
  name    { Faker::Company.name }
  image   { Faker::Company.logo }
  website {|f| "http://example.org/#{f[:name].downcase.strip}" }
  twitter {|f| "https://twitter.com/#{f[:name].strip}" }
end
