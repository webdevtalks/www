class Sponsor < ActiveRecord::Base
  def self.all
    [
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
      },
      {
        name: 'vauxoo',
        website: "https://www.vauxoo.com",
        twitter: 'vauxoo',
        image: 'sponsors/vauxoo.png'
      },
      {
        name: 'magmalabs',
        website: "http://www.magmalabs.io",
        twitter: 'weareMagmaLabs',
        image: 'sponsors/magmalabs.png'
      },
      {
        name: 'netmask',
        website: "http://devmask.net/",
        twitter: 'netmask',
        image: 'sponsors/netmask.jpg'
      }
    ]
  end
end
