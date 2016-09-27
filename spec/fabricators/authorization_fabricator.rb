Fabricator :authorization do

  credentials { { token: SecureRandom.hex }.with_indifferent_access }
  info        { { image: Faker::Avatar.image }.with_indifferent_access }
  provider    :developer
  uid         { Faker::Number.number(5) }

  user inverse_of: :authorization

end
