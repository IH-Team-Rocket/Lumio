import React, { useEffect, useState } from 'react';
import { getTickets } from '../../../../services/TicketService';
import Ticket from '../../../../components/ticket/Ticket';

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
          <Ticket ticket={ticket}/>
        </div>
            ))}
    </div>
  );
};

export default Market;