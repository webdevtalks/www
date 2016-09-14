module AppHelper

  MAP_OPTIONS = {
    fameborder: 0,
    height:     280,
    style:      'border: 0',
    width:      420
  }

  OAUTH_PROVIDERS = [
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

  SOCIAL_URLS = {
    facebook:     'facebook.com',
    googlegroups: 'groups.google.com/forum/#!forum',
    twitter:      'twitter.com'
  }

  def link_to_social(resource, link, options = {})
    target = resource.respond_to?(link) ? resource.send(link) : resource

    url = SOCIAL_URLS[link] ? "https://#{SOCIAL_URLS[link]}/#{target}" : target

    return unless url.is_a?(String)

    options[:icon]  ||= link
    options[:title] ||= ''

    link_to(url, target: '_blank') do
      content_tag(:i, nil, class: "fa fa-#{options[:icon]}") << options[:title]
    end
  end

  def oauth_providers_for_environment
    providers = case Rails.env
                when 'production'
                  %i(github)
                when 'review'
                  %i(developer)
                else
                  %i(developer github)
                end

    OAUTH_PROVIDERS.select{|provider| provider[:name].in?(providers) }
  end

  def render_affiliation(title, org, url = nil)
    return unless [title, org].reject(&:blank?).any?

    org = org && url ? link_to(org, url, target: '_blank') : org

    [title, org].reject(&:blank?).join(' en ').try(:html_safe)
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

  def render_map(object, options = {})
    options = MAP_OPTIONS.merge(options)

    key     = ENV['GOOGLE_MAPS_API_KEY']
    query   = CGI.escape(object.map)
    source  = "https://www.google.com/maps/embed/v1/place?key=#{key}&q=#{query}"

    content_tag :iframe, nil, options.merge(src: source)
  end

end
