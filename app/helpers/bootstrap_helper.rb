module BootstrapHelper

  ALERTS = {
    classes: %w(alert alert-dismissable),
    dismiss: {
      'class'        => 'close',
      'data-dismiss' => 'alert',
      'aria-hidden'  => true
    },
    mappings: {
      notice:  'info',
      success: 'success',
      error:   'danger',
      alert:   'warning'
    },
  }.with_indifferent_access

  def render_bootstrap_alerts
    html = ''

    flash.each do |type, message|
      mapping = ALERTS[:mappings][type]

      next if message.blank? || mapping.blank?

      html << content_tag(
        :div,
        content_tag(:button, raw('&times;'), ALERTS[:dismiss]) + message,
        class: (ALERTS[:classes] << "alert-#{mapping}").join(' ')
      )
    end

    html.html_safe
  end

end
