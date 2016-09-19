Fabricator :venue do
  name        { Faker::Company.name }
  description { Faker::Company.bs   }
  address     { Faker::Address.street_address }

  latitude    { Faker::Number.between(-90.00, 90.00) }
  longitude   { Faker::Number.between(-180.00, 180.00) }

  override_map_with_coordinates true

  location inverse_of: :venues
end
