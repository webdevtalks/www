module AppHelper

  def oauth_providers
    [
      {
        name: :developer,
        href: '/admin/auth/developer',
        icon: 'gear',
        text: 'Developer'
      },
      {
        name: :github,
        href: '/admin/auth/github',
        icon: 'github',
        text: 'GitHub'
      }
    ]
  end

  def oauth_providers_for_environment
    providers = case Rails.env
                when 'production'
                  %i{ github }
                when 'review'
                  %i{ developer }
                else
                  %i{ developer github }
                end

    oauth_providers.select{|provider| provider[:name].in?(providers) }
  end

  def render_login_links
    links = []

    oauth_providers_for_environment.each do |link|
      links << content_tag(:a, href: link[:href], class: 'btn btn-default') do
        content_tag(:i, '', class: "fa fa-#{link[:icon]}") + "\n#{link[:text]}"
      end
    end

    links.join.html_safe
  end

  def render_map_available?(object)
    object.address.present? || (object.latitude.present? && object.longitude.present?)
  end

  def render_map(object, options = {})
    query = if object.override_map_with_coordinates
              "#{object.latitude},#{object.longitude}"
            else
              object.address
            end

    content_tag :iframe, nil, height:      options[:height] || 280,
                              width:       options[:width]  || 420,
                              frameborder: 0,
                              style:       'border: 0',
                              src:         "https://www.google.com/maps/embed/v1/place?key=#{ENV['GOOGLE_MAPS_API_KEY']}&q=#{CGI.escape(query)}"

  end
end
