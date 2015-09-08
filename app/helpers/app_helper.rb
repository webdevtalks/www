module AppHelper

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
