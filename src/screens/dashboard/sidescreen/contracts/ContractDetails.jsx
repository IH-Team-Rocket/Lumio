import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContract } from '../../../../services/ContractService';

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
        <div>
            {contract.price}
        </div>
    );
};

export default ContractDetails;