Fabricator(:user) do
  name  { Faker::Name.name }
  email { Faker::Internet.email }
end

Fabricator(:user_with_dev_auth, from: :user) do
  authorization { Fabricate.build(:authorization, provider: :developer) }
end

Fabricator(:user_with_github_auth, from: :user, aliases: [:user_with_authorization]) do
  authorization { Fabricate.build(:authorization, provider: :github) }
end
