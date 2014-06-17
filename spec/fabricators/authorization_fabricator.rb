Fabricator(:authorization) do
  provider 'github'
  uid { Faker::Number.number 5 }
end
