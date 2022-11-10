import React, { useEffect,useRef, useState } from 'react';
import Map , { Marker } from 'react-map-gl';
import { getTickets } from '../../services/TicketService';
import './TicketMap.scss'
import 'mapbox-gl/dist/mapbox-gl.css';



const TicketMap = () => {
  const [pointers, setPointers] = useState([])
  const mapref = useRef(null)

  useEffect(() => {
    getTickets()
      .then(tickets => {
        setPointers(tickets.map(e => e.sellingUserContract.location.pointer))
      })
      .catch(err => console.error(err))
  }, []);


  return (
    <Map
    ref={mapref}
    mapboxAccessToken='pk.eyJ1IjoiZWxyb21zIiwiYSI6ImNsYTN0MDd2NTB1Zzkzb29qZGx6cG1uODgifQ.Rshd-7uEYzX0zZx3DyvtkA'
    initialViewState={{
      longitude: -3.70256,
      latitude: 39.80099,
      zoom: 4.7,
      maxZoom: 13
    }}
    style={{
      width: 500,
      height: 400,
    }}
    mapStyle="mapbox://styles/elroms/clab0n7m7000s14p33m43j48q"
  >
  { pointers.map((pointer, i) => {
        
       return(
        <Marker
          key={i}
          latitude={pointer[0]}
          longitude={pointer[1]}
        >
          <img alt="marker" src="marker.png" />
        </Marker>
       )
      })}
    
  </Map>
  );
};

export default TicketMap;