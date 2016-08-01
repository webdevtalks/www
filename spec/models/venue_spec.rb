require 'rails_helper'

describe Venue do

  describe '#detailed_name' do
    it 'returns the name and location formatted' do
      location = Fabricate(:location)
      venue    = Fabricate.build(:venue, name: 'Foo HQ', location: location)

      allow(location).to receive(:name) { 'Colima' }

      expect(venue.detailed_name).to eq('Foo HQ (Colima)')
    end
  end

end
