import React from 'react';
import { Link } from 'react-router-dom';
import './Ticket.scss'

const Ticket = ({ticket}) => {
  return (
    <Link to={""} className="ticket-container">
        <div>
          <div className='ticket-selling-user'><h3>{ticket.sellingUser.firstName} {ticket.sellingUser.lastName}</h3></div>
          <h4>{ticket.startDate?.toString().substring(0, 10)} &#x2192; {ticket.endDate?.toString().substring(0, 10)}</h4>
        </div>
        <div className='ticket-info'>
          <p>{ticket.quantity} kWh</p>
          <p>{ticket.price}€/kWh</p>
        </div>
    </Link>
  );
};

export default Ticket;