class Sponsor < ActiveRecord::Base
  def self.all
    [
      {
        name: 'Crowd Interactive',
        website: 'http://crowdint.com',
        twitter: 'crowdint',
        image: 'sponsors/crowdint.jpg'
      },
      {
        name: 'Cocoworking',
        website: 'https://www.facebook.com/CoCoWorkingMx',
        twitter: 'elcocoworking',
        image: 'sponsors/cocoworking.jpg'
      },
      {
        name: 'Don chambitas',
        website: 'http://www.donchambitas.com',
        twitter: 'DonChambitas',
        image: 'sponsors/chambitas.jpg'
      },
      {
        name: 'easybroker',
        website: "https://www.easybroker.com",
        twitter: 'EasyBroker',
        image: 'sponsors/eb.jpg'
      }
    ]
  end
end
