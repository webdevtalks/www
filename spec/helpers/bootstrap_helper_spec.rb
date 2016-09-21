require 'rails_helper'

describe BootstrapHelper do

  describe '#render_bootstrap_alerts' do
    it 'maps error flash messages to bootstrap alerts' do
      flash[:error] = 'Foo!'

      result = helper.render_bootstrap_alerts

      expect(result).to have_selector('div.alert.alert-danger', text: 'Foo!')
    end

    it 'maps success flash messages to bootstrap alerts' do
      flash[:success] = 'Bar'

      result = helper.render_bootstrap_alerts

      expect(result).to have_selector('div.alert.alert-success', text: 'Bar')
    end

    it 'builds dismissable bootstrap alerts' do
      flash[:success] = 'Foo!'

      result = helper.render_bootstrap_alerts

      expect(result).to have_selector('div.alert button.close')
    end
  end

end
