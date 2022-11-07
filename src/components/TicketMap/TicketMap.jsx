import React from 'react';
import Map from 'react-map-gl';

const TicketMap = () => {

  console.log('entro');

  return (
    <Map
    mapboxAccessToken='pk.eyJ1IjoiZWxyb21zIiwiYSI6ImNsYTN0MDd2NTB1Zzkzb29qZGx6cG1uODgifQ.Rshd-7uEYzX0zZx3DyvtkA'
    initialViewState={{
      longitude: -3.70256,
      latitude: 39.80099,
      zoom: 4.7
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
  );
};

export default TicketMap;