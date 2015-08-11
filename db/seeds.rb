unless Rails.env.production?
  Faker::Config.locale = 'es'

  puts 'Creating location'
  location = Location.create! city: 'Colima', state: 'Colima', country: 'México'

  puts 'Creating venue'
  venue = Venue.create! location:    location,
                        name:        Faker::Company.name,
                        address:     "#{Faker::Address.street_suffix} #{Faker::Address.street_address}, #{location.name}, #{Faker::Address.postcode}",
                        description: Faker::Lorem.paragraphs.join

  puts 'Creating event'
  event = Event.create! venue: venue,
                        date:  15.days.from_now,
                        theme: "#{Faker::Hacker.adjective.titleize} #{Faker::Hacker.noun}"

  puts 'Creating speakers'
  speakers = []

  4.times do
    u = User.create! name:              Faker::Name.name,
                     email:             Faker::Internet.email,
                     profile_photo_url: Faker::Avatar.image(nil, '200x200', 'jpg').gsub('http', 'https'),
                     twitter:           Faker::Internet.user_name
    speakers << u
  end

  puts 'Creating talks'
  speakers.each do |speaker|
    speaker.talks.create! event:       event,
                          title:       "#{Faker::Hacker.ingverb.titleize} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}",
                          description: Faker::Lorem.paragraphs.join
  end
end
