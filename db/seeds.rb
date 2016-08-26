unless Rails.env.production?
  Faker::Config.locale = 'es'

  puts 'Creating location'
  location = Location.create!(
    city: 'Colima',
    state: 'Colima',
    country: 'México'
  )

  puts 'Creating venue'
  venue = Venue.create!(
    name:        Faker::Company.name,
    description: Faker::Lorem.paragraphs.join,
    address:     "#{Faker::Address.street_suffix} #{Faker::Address.street_address}, #{location.name}, #{Faker::Address.postcode}",
    location:    location
  )

  puts 'Creating event'
  event = Event.create!(
    venue: venue,
    date:  15.days.from_now,
    theme: "#{Faker::Hacker.adjective.titleize} #{Faker::Hacker.noun}"
  )

  puts 'Creating speakers'
  speakers = []

  4.times do
    speakers << User.create!(
      name:      Faker::Name.name,
      email:     Faker::Internet.email,
      photo_url: Faker::Avatar.image(nil, '200x200', 'jpg').gsub('http', 'https'),
      twitter:   Faker::Internet.user_name
    )
  end

  puts 'Creating event talk proposals'
  speakers.each do |speaker|
    speaker.talks.create!(
      title:       "#{Faker::Hacker.ingverb.titleize} #{Faker::Hacker.adjective} #{Faker::Hacker.noun}",
      description: Faker::Lorem.paragraphs.join,
      event:       event,
      status:      :proposal
    )
  end

  puts 'Accepting event talks'
  event.talks.all.sample(2).each(&:accept!)
end
