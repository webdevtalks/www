require 'rails_helper'

RSpec.describe ApplicationHelper, type: :helper do
  it '#show sponsors' do
    expect(helper.show_sponsors)
    .eql?("<li><a height=\"85\" width=\"200\" href=\"#\"><img src=\"/assets/logo_3.jpg\" alt=\"Logo 3\" /></a></li>"\
          "<li><a height=\"85\" width=\"200\" href=\"#\"><img src=\"/assets/logo_3.jpg\" alt=\"Logo 3\" /></a></li>"\
          "<li><a height=\"85\" width=\"200\" href=\"http://www.donchambitas.com\"><img src=\"/assets/logo_1.jpg\" alt=\"Logo 1\" /></a></li>"\
          "<li><a height=\"85\" width=\"200\" href=\"http://www.crowdint.com\"><img src=\"/assets/logo_2.jpg\" alt=\"Logo 2\" /></a></li>")
  end
end
