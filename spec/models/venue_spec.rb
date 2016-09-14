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

  describe '#map' do
    context 'when map override is active' do
      it 'returns the venue coordinates' do
        venue  = Fabricate.build(:venue, override_map_with_coordinates: true)

        result = venue.map

        expect(result).to include(venue.latitude.to_s)
        expect(result).to include(venue.longitude.to_s)
      end
    end

    context 'when map override is inactive' do
      it 'returns the venue address' do
        venue  = Fabricate.build(:venue, override_map_with_coordinates: false)

        expect(venue.map).to include(venue.address)
      end
    end
  end

end
