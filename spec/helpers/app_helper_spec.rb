require 'rails_helper'

describe AppHelper do

  describe '#oauth_providers' do
    it 'returns all oauth providers metadata' do
      helper.oauth_providers.each do |provider|
        expect(provider.keys).to include(:href, :icon, :text)
      end
    end
  end

  describe '#oauth_providers_for_environment' do
    context 'when production' do
      it 'returns metadatada for github provider' do
        allow(Rails).to receive(:env){ 'production' }
        providers = helper.oauth_providers_for_environment.map{|p| p[:name] }
        expect(providers).to eq([:github])
      end
    end

    context 'when review' do
      it 'returns metadata for deveoper provider' do
        allow(Rails).to receive(:env){ 'review' }
        providers = helper.oauth_providers_for_environment.map{|p| p[:name] }
        expect(providers).to eq([:developer])
      end
    end

    context 'when any other environment' do
      it 'returns metadata for developer and github providers' do
        providers = helper.oauth_providers_for_environment.map{|p| p[:name] }
        expect(providers).to include(:developer, :github)
      end

      it 'returns metadata for developer and github providers' do
        allow(Rails).to receive(:env){ 'development' }
        providers = helper.oauth_providers_for_environment.map{|p| p[:name] }
        expect(providers).to include(:developer, :github)
      end
    end
  end

  describe '#render_login_links' do
    it 'returns links targeting login paths to oauth providers' do
      helper.oauth_providers.each do |provider|
        expect(helper.render_login_links).to have_selector(
          "a[href='#{provider[:href]}'].btn .fa-#{provider[:icon]}"
        )
      end
    end
  end

end
