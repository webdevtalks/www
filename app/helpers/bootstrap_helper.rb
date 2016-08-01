module BootstrapHelper

  ALERT_MAPPINGS = {
    notice:  'info',
    success: 'success',
    error:   'danger',
    alert:   'warning'
  }.with_indifferent_access

  def render_bootstrap_alerts
    html = ''

    dismiss_button_options = {
      'class'        => 'close',
      'data-dismiss' => 'alert',
      'aria-hidden'  => true
    }

    dismiss_button = content_tag(:button, raw('&times;'), dismiss_button_options)

    flash.each do |type, alert_message|
      next if alert_message.blank? || ALERT_MAPPINGS[type].nil?
      alert_content = dismiss_button + alert_message
      alert_classes = %W{alert alert-#{ALERT_MAPPINGS[type]} alert-dismissible}.join(' ')
      html << content_tag(:div, alert_content, class: alert_classes)
    end

    html.html_safe
  end

end
