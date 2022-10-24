import React, { useEffect, useState } from 'react';
import { getContracts } from '../../../../services/ContractService';
import './Contracts.scss'
import Contract from '../../../../components/contract/Contract';

const Contracts = () => {
  const [ contracts, setContracts ] = useState([])

  useEffect(() => {
    getContracts()
      .then(contracts => {
        setContracts(contracts)
    })
  }, [])

  return contracts ? (
    <div>
      <h2 className='dashboard-title'>My Contracts</h2>
      {contracts.map((contract) => (
        <Contract contract={contract} key={contract.id} to={`/contracts/${contract.id}`}/>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Contracts;