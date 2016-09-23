unless Rails.env.production?

  Faker::Config.locale = 'es'

  puts 'Creating location'
  location = Location.create(city: 'Colima', state: 'Colima', country: 'México')

  puts 'Creating venue'
  venue = Fabricate(:venue, location: location)

  puts 'Creating event'
  event = Fabricate(:event, date: 15.days.from_now, venue: venue)

  puts 'Creating sponsors'
  Fabricate.times(4, :sponsor, active: true)

  puts 'Creating talks/speakers'
  Fabricate.times(4, :talk, status: :accepted, event: event)

end
