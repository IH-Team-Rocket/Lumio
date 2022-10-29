import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContract } from '../../../../services/ContractService';
import './ContractDetails.scss'

const ContractDetails = () => {
  const [ contract, setContract ] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getContract(id)
      .then(contract => {
        setContract(contract)
      })
  }, [id])

    return contract ? (
        <div className='contract-detail-container'>
            <h2>Contract Info</h2>
            <p>{contract.id}</p>
            <p>{contract.location.postalCode}</p>
            <p>{contract.location.street}</p>
            <p>{contract.location.streetNumber}</p>
            <p>{contract.price}</p>
            <p>{contract.solarPanels}</p>
            <p>{contract.powerPerPanel}</p>
            <p>{contract.user}</p>
            <p>{contract.createdAt}</p>
        </div>
    ) : (
      <p>Loading...</p>
    );
};

export default ContractDetails;