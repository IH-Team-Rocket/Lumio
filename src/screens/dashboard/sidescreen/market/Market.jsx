import React, { useEffect, useState } from 'react';
import { getTickets } from '../../../../services/TicketService';
import Ticket from '../../../../components/ticket/Ticket';
import { TbCirclePlus } from 'react-icons/tb'
import "./Market.scss"
import { Link } from 'react-router-dom';
import TicketMap from '../../../../components/TicketMap/TicketMap';

const Market = () => {
  const [ tickets, setTickets ] = useState([])
  
    useEffect(() => {
        getTickets()
          .then(tickets => {
            setTickets(tickets)
          })
      }, []);


  return (
    <div className='market-container'>
      <div className='sidescreen-title'>
        <h2 className='dashboard-title'>Tickets</h2>

        <Link to={"/tickets/create"}><TbCirclePlus className='title-icon'/></Link>
      </div>
      <div className='market'>
        <div className='tickets'>
          {tickets.map((ticket) => (
          <div  key={ticket.id}>
            <Ticket ticket={ticket}/>
          </div>
              ))}
        </div>
        <div className='map-container'>
          <div className='map'>
            <TicketMap/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;