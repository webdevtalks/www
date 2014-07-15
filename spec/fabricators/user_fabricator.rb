Fabricator(:user) do
  name { Faker::Name.name }
  email { Faker::Internet.email }
end

Fabricator(:user_with_authorization, from: :user) do
  authorization
end
