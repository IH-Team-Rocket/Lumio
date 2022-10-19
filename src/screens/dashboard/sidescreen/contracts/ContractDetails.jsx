import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContract } from '../../../../services/ContractService';
import './ContractDetails.scss'

const ContractDetails = () => {
  const [ contract, setContract ] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getContract(id)
      .then(contract => {
        setContract(contract)
      })
  }, [id])

    return (
        <div className='contract-detail-container'>
            <h2>Contract Info</h2>
        </div>
    );
};

export default ContractDetails;