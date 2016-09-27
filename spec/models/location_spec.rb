require 'rails_helper'

describe Location do

  describe '#name' do
    context 'when city has the same state name' do
      it 'returns city and country' do
        location = Fabricate.build(
          :location,
          city:    'Colima',
          country: 'México',
          state:   'Colima'
        )
        expect(location.name).to eq('Colima, México')
      end

      it 'returns city, state, and country' do
        location = Fabricate.build(
          :location,
          city:    'Villa de Álvarez',
          country: 'México',
          state:   'Colima'
        )
        expect(location.name).to eq('Villa de Álvarez, Colima, México')
      end
    end
  end

end
