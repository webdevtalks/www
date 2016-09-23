require 'rails_helper'

feature 'Admin::Speakers' do

  given :admin do
    Fabricate(:user_with_authorization)
  end

  background do
    authenticate_as(admin, via: :developer, mock: true)
  end

  scenario 'Listing speakers' do
    speakers = Fabricate.times(3, :speaker)

    visit admin_speakers_path

    expect(page).to have_selector(:css, :h2, text: 'Ponentes')
    expect(page).to have_selector(:css, 'table tr.speaker', count: 3)
  end

  scenario 'Viewing speaker' do
    speaker = Fabricate(:speaker, talks: [Fabricate.build(:talk)])

    visit admin_speaker_path(speaker)

    expect(page).to have_selector(:css, :h2, text: speaker.name)

    within '.avatar' do
      expect(page).to have_selector(:css, %(img[src="#{speaker.photo_url}"]))
    end

    within '.contact' do
      %i(link facebook twitter).each do |url|
        expect(page).to have_selector(:css, 'h5 a', text: speaker.send(url))
      end
    end

    within '.talks' do
      speaker.talks.each do |talk|
        expect(page).to have_selector(:css, 'h5 a', text: talk.title)
      end
    end
  end

  scenario 'Editing/Updating speakers' do
    speaker = Fabricate(:speaker, talks: [Fabricate.build(:talk)])

    visit edit_admin_speaker_path(speaker)

    expect(page).to have_selector(:css, :h2, text: 'Editar ponente')

    within '.personal' do
      fill_in 'Nombre',    with: 'Juan'
      fill_in 'Correo',    with: 'juan@example.org'
      fill_in 'Sitio Web', with: 'https://foo.example.org/juan'
      fill_in 'Facebook',  with: 'Juan'
      fill_in 'Twitter',   with: 'Juan'
    end

    within '.organization' do
      fill_in 'Rol',       with: 'Programador'
      fill_in 'Nombre',    with: 'Foo'
      fill_in 'Sitio Web', with: 'https://foo.example.org'
    end

    click_on 'Guardar ponente'

    expect(page).to have_content('Ponente actualizado con éxito')

    speaker.reload

    expect(speaker.name).to eq('Juan')
    expect(speaker.email).to eq('juan@example.org')
    expect(speaker.url).to eq('https://foo.example.org/juan')
    expect(speaker.facebook).to eq('Juan')
    expect(speaker.twitter).to eq('Juan')

    expect(speaker.title).to eq('Programador')
    expect(speaker.organization_name).to eq('Foo')
    expect(speaker.organization_url).to eq('https://foo.example.org')
  end

  scenario 'Editing/Updating speakers: failure' do
    speaker = Fabricate(:speaker, talks: [Fabricate.build(:talk)])

    visit edit_admin_speaker_path(speaker)

    expect(page).to have_selector(:css, :h2, text: 'Editar ponente')

    within '.personal' do
      fill_in 'Nombre',    with: ''
      fill_in 'Correo',    with: 'juan@example.org'
      fill_in 'Sitio Web', with: 'https://foo.example.org/juan'
      fill_in 'Facebook',  with: 'Juan'
      fill_in 'Twitter',   with: 'Juan'
    end

    within '.organization' do
      fill_in 'Rol',       with: 'Programador'
      fill_in 'Nombre',    with: 'Foo'
      fill_in 'Sitio Web', with: 'https://foo.example.org'
    end

    click_on 'Guardar ponente'

    expect(page).to have_content(
      "Errores: #{speaker.humanized_errors}"
    )
  end

end
