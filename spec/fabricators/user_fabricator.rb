Fabricator :user do
  name  { Faker::Name.name }
  email { |f| "#{f[:name].parameterize}@example.org" }
end

Fabricator :user_with_authorization, from: :user do
  authorization { Fabricate.build(:authorization, provider: :developer) }
end

Fabricator :user_with_github_authorization, from: :user do
  authorization { Fabricate.build(:authorization, provider: :github) }
end
