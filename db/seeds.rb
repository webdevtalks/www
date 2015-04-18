unless Rails.env.production?

  puts 'Create location'
  location = Location.create! city:    'Colima',
                              state:   'Colima',
                              country: 'México'

  puts 'Creating event'
  event    = Event.create!    location: location,
                              date:     15.days.from_now,
                              theme:    "#{Faker::Hacker.adjective.titleize} #{Faker::Hacker.noun}"

  puts 'Creating speakers'
  speakers = []

  4.times do
    u = User.create! name:              Faker::Name.name,
                     email:             Faker::Internet.email,
                     profile_photo_url: Faker::Avatar.image(nil, '200x200', 'jpg'),
                     twitter:           Faker::Internet.user_name
    speakers << u
  end

  puts 'Creating talks'
  speakers.each do |speaker|
    speaker.talks.create!     event:       event,
                              title:       "#{Faker::Hacker.ingverb.titleize} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}",
                              description: Faker::Lorem.paragraphs.join
  end
end
