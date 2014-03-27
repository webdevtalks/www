require 'spec_helper'

describe Paper do
  before do
    subject { Fabricate :paper }
  end

  it 'is invalid without topic name' do 
    subject.should have(1).errors_on(:topic)
  end
  it 'is invalid without speaker name' do 
    subject.should have(1).errors_on(:name)
  end
  it 'is invalid without email' do
    subject.should have(1).errors_on(:email)
  end
  it 'is invalid without description' do
    subject.should have(1).errors_on(:description)
  end
end
