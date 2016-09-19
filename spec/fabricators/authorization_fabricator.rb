Fabricator(:authorization) do
  provider    :developer
  credentials { { token: SecureRandom.hex }.with_indifferent_access }
  info        {
                {
                  email: Faker::Internet.safe_email,
                  image: Faker::Avatar.image
                }.with_indifferent_access
              }
  uid         { Faker::Number.number(5) }

  user inverse_of: :authorization
end
