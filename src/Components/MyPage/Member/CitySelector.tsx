import React, { useState } from 'react';

interface CityDetails {
  [city: string]: {
    [gu: string]: string[];
  };
}

interface Props {
  cityDetails: CityDetails;
  onSelect: (city: string, district: string, neighborhood: string) => void;
}

const CitySelector: React.FC<Props> = ({ cityDetails, onSelect }) => {
  const [selectedProvince, setSelectedProvince] = useState<string>('');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('');

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const province = event.target.value;
    setSelectedProvince(province);
    setSelectedCity('');
    setSelectedNeighborhood('');
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const city = event.target.value;
    setSelectedCity(city);
    setSelectedNeighborhood('');
  };

  const handleNeighborhoodChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const neighborhood = event.target.value;
    setSelectedNeighborhood(neighborhood);
    onSelect(selectedCity, selectedProvince, neighborhood);
  };

  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <select
        value={selectedProvince}
        onChange={handleProvinceChange}
        style={{
          border: '1px solid #CCCCCC',
          borderRadius: '16px',
          width: '208px',
          height: '49px',
          fontSize: '14px',
          marginRight: '24px',
          paddingTop: 'auto',
          paddingLeft: '20px',
          appearance: 'none',
          backgroundImage: `url('/assets/MyPage/graycheck.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 23px center',
        }}
      >
        <option
          style={{
            fontSize: '14px',
            textAlign: 'left',
            lineHeight: '16.71px',
            paddingLeft: '20px',
          }}
        >
          시/도
        </option>
        {Object.keys(cityDetails).map((province, index) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>
      <select
        value={selectedCity}
        onChange={handleCityChange}
        style={{
          border: '1px solid #CCCCCC',
          borderRadius: '16px',
          width: '208px',
          height: '49px',
          marginRight: '24px',
          paddingTop: 'auto',
          paddingLeft: '20px',
          fontSize: '14px',
          appearance: 'none',
          backgroundImage: `url('/assets/MyPage/graycheck.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 23px center',
        }}
      >
        <option
          style={{
            fontSize: '14px',
            textAlign: 'left',
            lineHeight: '16.71px',
            paddingLeft: '20px',
          }}
        >
          시/군/구
        </option>
        {selectedProvince &&
          cityDetails[selectedProvince] &&
          Object.keys(cityDetails[selectedProvince]).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
      </select>
      <select
        value={selectedNeighborhood}
        onChange={handleNeighborhoodChange}
        style={{
          border: '1px solid #CCCCCC',
          borderRadius: '16px',
          width: '208px',
          height: '49px',
          marginRight: '24px',
          paddingTop: 'auto',
          paddingLeft: '20px',
          fontSize: '14px',
          appearance: 'none',
          backgroundImage: `url('/assets/MyPage/graycheck.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 23px center',
        }}
      >
        <option
          style={{
            fontSize: '14px',
            textAlign: 'left',
            lineHeight: '16.71px',
            paddingLeft: '20px',
          }}
        >
          읍/면/동
        </option>
        {selectedProvince &&
          selectedCity &&
          cityDetails[selectedProvince][selectedCity] &&
          cityDetails[selectedProvince][selectedCity].map(
            (neighborhood: string, index: number) => (
              <option key={neighborhood} value={neighborhood}>
                {neighborhood}
              </option>
            ),
          )}
      </select>
    </div>
  );
};

export default CitySelector;