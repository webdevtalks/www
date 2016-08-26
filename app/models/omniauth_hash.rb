class OmniauthHash

  def initialize(hash)
    @params = ActionController::Parameters.new(hash)
  end

  def permit!
    require_keys!
    permit_keys.to_h.with_indifferent_access
  end


  def info_keys
    keys = []

    info = @params['info']

    if info
      keys.push(*info.keys)
      keys.push({ urls: info['urls'].keys }) if info['urls']
    end

    keys
  end

  def credentials_keys
    @params['credentials'].keys if @params['credentials']
  end


  def extra_keys
    {
      raw_info: @params['extra']['raw_info'].keys
    } if @params.dig('extra', 'raw_info')
  end

  private

  def require_keys!
    %i{provider uid info}.each{|key| @params.require(key) }
  end

  def permit_keys
    @params.permit(
      :provider,
      :uid,
      info: info_keys,
      credentials: credentials_keys,
      extra: extra_keys
    )
  end

end
