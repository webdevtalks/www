module ApplicationHelper
  SPONSORS = [
      {
        name: 'cocoworking',
        link: 'https://www.facebook.com/CoCoWorkingMx',
        img: 'logo_1.jpg'
      },
      {
        name: 'crowdint',
        link: 'http://www.crowdint.com',
        img: 'logo_2.jpg'
      },
      {
        name: 'donchambitas',
        link: "http://www.donchambitas.com",
        img: 'logo_3.jpg'
      },
      {
        name: 'easybroker',
        link: "https://www.easybroker.com",
        img: 'logo_4.jpg'
      }
  ]

  def show_sponsors
    html = ''
    SPONSORS.sample(4).each do |value|
      html+= "<li>"
      html+=  link_to(image_tag("#{value[:img]}"), "#{value[:link]}", height: 85, width: 200)
      html+= "</li>"
    end
    return html.html_safe
  end
end
