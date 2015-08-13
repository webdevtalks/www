module ApplicationHelper
  SPONSORS = {
      item1: {
        link: 'https://www.facebook.com/CoCoWorkingMx',
        img: 'logo_1.jpg'
      },
      item2: {
        link: 'http://www.crowdint.com',
        img: 'logo_2.jpg'
      },
      item3: {
        link: "http://www.donchambitas.com",
        img: 'logo_3.jpg'
      },
      item4: {
        link: "#",
        img: 'logo_4.jpg'
      }
  }

  def show_sponsors
    html = ''
    make_it_random.each do |key, value|
      html+= "<li>"
      html+=  link_to(image_tag("#{value[:img]}"), "#{value[:link]}", height: 85, width: 200)
      html+= "</li>"
    end
    return html.html_safe
  end

  private

  def make_it_random
    SPONSORS.to_a.sample(4).to_h
  end
end
