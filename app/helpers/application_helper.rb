module ApplicationHelper

  def render_map_available?(object)
    object.address.present? || (object.latitude.present? && object.longitude.present?)
  end

  def render_map(object, options = {})
    query = if object.override_map_with_coordinates
              "q=#{object.latitude}, #{object.longitude}"
            else
              "q=#{object.address}"
            end

    tag :iframe, width:       options[:width]  || 420,
                 height:      options[:height] || 280,
                 frameborder: 0,
                 style:       'border: 0',
                 src:         "https://www.google.com/maps/embed/v1/place?key=#{ENV['GOOGLE_MAPS_API_KEY']}&#{query}"
  end

end
