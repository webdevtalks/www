require 'spec_helper'

feature 'Login page' do
  scenario 'when visiting /login' do
    visit login_path

    expect(page).to  have_content('Login with GitHub.')
  end
end

