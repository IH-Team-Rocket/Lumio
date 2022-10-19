import React, { useEffect, useState } from 'react';
import { getContracts } from '../../../../services/ContractService';

const Contracts = () => {
    const [ contracts, setContracts ] = useState([])

    useEffect(() => {
        getContracts()
          .then(contracts => {
            setContracts(contracts)
          })
      }, [])


    return (
        <div>
                {contracts.map((contract) => (
                    <p key={contract.id}>{contract.price}</p>
                ))}
        </div>
    );
};

export default Contracts;