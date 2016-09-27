Fabricator :venue do
  address                       { Faker::Address.street_address }
  description                   { Faker::Company.bs   }
  name                          { Faker::Company.name }
  latitude                      { Faker::Address.latitude }
  longitude                     { Faker::Address.longitude }
  override_map_with_coordinates { true }

  location inverse_of: :venues
end
