require 'rails_helper'

feature 'Admin::Talks' do

  given :admin do
    Fabricate(:user_with_authorization)
  end

  background do
    authenticate_as(admin, via: :developer, mock: true)
  end

  scenario 'Listing talks' do
    talks = Fabricate.times(2, :talk)

    visit admin_talks_path

    expect(page).to have_selector(:css, :h2, text: 'Charlas')

    talks.each do |talk|
      expect(page).to have_selector(:css, '.talk', text: talk.title)
      expect(page).to have_selector(:css, '.talk', text: talk.speaker.name)
    end

    expect(page).to have_selector(:css, '.talk a.edit', count: talks.count)
  end

  scenario 'edit talks' do
    talk = Fabricate(:talk)

    visit edit_admin_talk_path(talk)

    expect(page).to have_selector(:css, :h2, text: 'Editar charla')

    fill_in 'Título', with: 'Foo'
    fill_in 'Descripción', with: 'Bar'

    click_on 'Guardar charla'

    talk.reload

    expect(talk.title).to eq('Foo')
    expect(talk.description).to eq('Bar')
  end

end
