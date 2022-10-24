import React, { useEffect, useState } from 'react';
import { getTickets } from '../../../../services/TicketService';
import { Link } from 'react-router-dom';
import Ticket from '../../../../components/ticket/Ticket';
import { computeHeadingLevel } from '@testing-library/react';

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
      <h2 className='dashboard-title'>Tickets</h2>
      {tickets.map((ticket) => (
        <div  key={ticket.id}>
          {console.log(ticket)}
          <Ticket ticket={ticket}/>
        </div>
            ))}
    </div>
  );
};

export default Market;