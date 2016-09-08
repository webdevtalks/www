unless Rails.env.production?

  Faker::Config.locale = 'es'

  puts 'Creating location'
  location = Location.create(city: 'Colima', state: 'Colima', country: 'México')

  puts 'Creating venue'
  venue = Fabricate(:venue, location: location)

  puts 'Creating event'
  event = Fabricate(:event, date: 15.days.from_now, venue: venue)

  puts 'Creating sponsors'

  puts 'Creating sponsors, talks and speakers'
  4.times do
    Fabricate(:sponsor, active: true)
    Fabricate(:talk, status: :accepted, event: event)
  end

end
