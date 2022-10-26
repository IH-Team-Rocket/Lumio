import React, { useEffect, useState } from 'react';
import { getContracts } from '../../../../services/ContractService';
import './Contracts.scss'
import Contract from '../../../../components/contract/Contract';
import { TbCirclePlus } from 'react-icons/tb'
import { Link } from 'react-router-dom';

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
      <div className="sidescreen-title">
        <h2 className='dashboard-title'>My Contracts</h2>
        <Link to={"/contracts/create"}><TbCirclePlus className='title-icon'/></Link>
      </div>
      {contracts.map((contract) => (
        <Contract contract={contract} key={contract.id} to={`/contracts/${contract.id}`}/>
      ))}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Contracts;