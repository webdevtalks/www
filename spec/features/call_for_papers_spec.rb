require 'spec_helper'

describe "call for papers" do
  it "send a proposal successfully" do
    visit root_path
    fill_in "call_for_papers_topic", with: "Github Hooks"
    fill_in "call_for_papers_name", with: "Foo perales"
    fill_in "call_for_papers_email", with: "test@test.com"
    fill_in "description", with: "This topic is about tech."
    click_button "Enviar"
  end
end
