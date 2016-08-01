require 'rails_helper'

describe BootstrapHelper do

  describe '#render_bootstrap_alerts' do
    it 'maps flash messages to bootstrap alerts' do
      flash[:error] = 'An error'

      result = helper.render_bootstrap_alerts

      expect(result).to have_selector('div.alert.alert-danger', text: 'An error')
    end

    it 'builds dismissable bootstrap alerts' do
      flash[:success] = 'Foo!'

      result = helper.render_bootstrap_alerts

      expect(result).to have_selector('div.alert button.close')
    end
  end

end
