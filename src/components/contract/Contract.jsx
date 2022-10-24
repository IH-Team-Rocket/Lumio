import React from 'react';
import { Link } from 'react-router-dom';
import './Contract.scss'

const Contract = ({contract}) => {
  return (
    <Link to={`/contracts/${contract.id}`} className="contract-container">
      <p>{contract.location.street} {contract.location.streetNumber}</p>
    </Link>
  );
};

export default Contract;