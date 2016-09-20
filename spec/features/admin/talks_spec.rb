require 'rails_helper'

feature 'Admin::Talks' do

  given :admin do
    Fabricate(:user_with_dev_auth)
  end

  background do
    authenticate_as(admin, via: :developer, mock: true)
  end

  scenario 'Listing talks' do
    talks = Fabricate.times(2, :talk)

    visit admin_talks_path

    expect(page).to have_selector(:css, :h2, text: 'Charlas')

    talks.each do |t|
      expect(page).to have_selector(:css, '.talks .talk', text: t.title)
      expect(page).to have_selector(:css, '.talks .talk', text: t.speaker.name)
    end

    expect(page).to have_selector(:css, '.talks .talk a.edit', count: talks.count)
  end

end
