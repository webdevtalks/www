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
    }
  }.with_indifferent_access

  def bootstrap_alert_classes(type)
    ALERTS[:classes] | %W(alert-#{type})
  end

  def bootstrap_close_button
    content_tag(:button, raw('&times;'), ALERTS[:dismiss])
  end

  def render_bootstrap_alerts
    flash.map do |type, message|
      mapping = ALERTS[:mappings][type]

      next if message.blank? || mapping.blank?

      content_tag :div, class: bootstrap_alert_classes(mapping).join(' ') do
        bootstrap_close_button + message
      end

    end.compact.join.html_safe
  end

end
