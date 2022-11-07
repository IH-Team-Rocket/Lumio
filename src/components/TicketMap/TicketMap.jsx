import React, { useEffect,useLayoutEffect,useRef, useState } from 'react';
import Map , { Marker } from 'react-map-gl';

import { getTickets } from '../../services/TicketService';
import mapboxgl from 'mapbox-gl';
import './TicketMap.scss'
import 'mapbox-gl/dist/mapbox-gl.css';


/* Lat:{ticket.sellingUserContract.location.pointer[0]} */
/* Lon:{ticket.sellingUserContract.location.pointer[1]} */

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

  

  console.log()

  return (
    <Map
    ref={mapref}
    mapboxAccessToken='pk.eyJ1IjoiZWxyb21zIiwiYSI6ImNsYTN0MDd2NTB1Zzkzb29qZGx6cG1uODgifQ.Rshd-7uEYzX0zZx3DyvtkA'
    initialViewState={{
      longitude: -3.70256,
      latitude: 39.80099,
      zoom: 4.7
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  >
  { pointers.map((pointer, i) => {
        
       return(
        <Marker
          key={i}
          anchor="bottom"
          latitude={pointer[0]}
          longitude={pointer[1]}
        >
          <img alt="" src="https://img.icons8.com/color/48/000000/marker.png" />
        </Marker>
       )
      })}
    
  </Map>
  );
};

export default TicketMap;