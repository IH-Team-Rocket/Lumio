import React, { useEffect, useState } from 'react';
import { getTickets } from '../../../../services/TicketService';
import Ticket from '../../../../components/ticket/Ticket';
import { TbCirclePlus } from 'react-icons/tb'
import "./Market.scss"
import { Link } from 'react-router-dom';

const Market = () => {
  const [ tickets, setTickets ] = useState([])

    useEffect(() => {
        getTickets()
          .then(tickets => {
            setTickets(tickets)
          })
      }, []);

  return (
    <div>
      <div className='sidescreen-title'>
        <h2 className='dashboard-title'>Tickets</h2>

        <Link to={"/tickets/create"}><TbCirclePlus className='title-icon'/></Link>
      </div>
      {tickets.map((ticket) => (
        <div  key={ticket.id}>
          <Ticket ticket={ticket}/>
        </div>
            ))}
    </div>
  );
};

export default Market;