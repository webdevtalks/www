require 'rails_helper'

describe Paper do
  before do
    subject { Fabricate :paper }
    subject.valid?
  end

  it 'is invalid without topic name' do
    expect(subject.errors[:topic]).to include("can't be blank")
  end

  it 'is invalid without speaker name' do
    expect(subject.errors[:name]).to include("can't be blank")
  end
  it 'is invalid without email' do
    expect(subject.errors[:email]).to include("can't be blank")
  end
  it 'is invalid without description' do
    expect(subject.errors[:description]).to include("can't be blank")
  end
end
