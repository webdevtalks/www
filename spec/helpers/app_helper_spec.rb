require 'rails_helper'

describe AppHelper do

  describe '#link_to_social' do
    it 'returns nothing when resource does not respond to link and is not a string' do
      speaker = Fabricate(:speaker)
      expect(helper.link_to_social(speaker, 'nope')).to be_nil
    end

    it 'returns link for given profile when link is a social network' do
      expect(helper.link_to_social('foo', :googlegroups)).to have_selector(
        'a[href="https://groups.google.com/forum/#!forum/foo"]'
      )
    end

    it 'returns nothing when resource link is empty' do
      speaker = Fabricate(:speaker, url: nil)
      expect(helper.link_to_social(speaker, 'url')).to be_nil
    end

    context 'when link is known a social network'  do
      it 'returns twiter link for resource' do
        speaker = Fabricate(:speaker, twitter: 'foo')
        result  = helper.link_to_social(speaker, :twitter)

        expect(result).to have_selector('a[href="https://twitter.com/foo"]')
      end

      it 'returns facebook link for resource' do
        speaker = Fabricate(:speaker, facebook: 'foo')
        result  = helper.link_to_social(speaker, :facebook)

        expect(result).to have_selector('a[href="https://facebook.com/foo"]')
      end
    end

    context 'when link is not a social network' do
      it "returns link pointing to link resource's value" do
        speaker = Fabricate(:speaker, link: 'http://me.example.org')
        result  = helper.link_to_social(speaker, :link)

        expect(result).to have_selector('a[href="http://me.example.org"]')
      end
    end
  end

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

  describe '#render_affiliation' do
    context 'when title and org are blank' do
      it 'returns nothing' do
        expect(helper.render_affiliation(nil, nil)).to be_nil
      end
    end

    context 'when only title is present' do
      it 'returns title' do
        expect(helper.render_affiliation('John', nil)).to eq('John')
      end
    end

    context 'when title is not present' do
      it 'returns org if present' do
        expect(helper.render_affiliation(nil, 'Foo')).to eq('Foo')
      end

      it 'returns a link to org if url is also present' do
        result = helper.render_affiliation(nil, 'Foo', 'http://example.org')

        expect(result).to have_selector('a[href="http://example.org"]')
        expect(result).to have_content('Foo')
      end

      it 'returns nothing if only url is present' do
        result = helper.render_affiliation(nil, nil, 'http://example.org')
        expect(result).to be_nil
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
