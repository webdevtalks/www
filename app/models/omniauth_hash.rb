class OmniauthHash

  def initialize(hash)
    @params = ActionController::Parameters.new(hash)
  end

  def permit!
    require_keys
    permit_keys.to_h.with_indifferent_access
  end

  def permit_keys
    @params.permit :provider,
                   :uid,
                   info:        @params['info'].keys << { urls: @params['info']['urls'].keys },
                   credentials: @params['credentials'].keys,
                   extra:       { raw_info: @params['extra']['raw_info'].keys }
  end

  def require_keys
    [:provider, :uid, :info, :credentials, :extra].each{|p| @params.require(p) }
  end

end
