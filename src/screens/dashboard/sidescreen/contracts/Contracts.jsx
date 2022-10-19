import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getContracts } from '../../../../services/ContractService';
import './Contracts.scss'

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
                <Link key={contract.id} to={`/contracts/${contract.id}`} className="contractCard">
                    <div>
                    <h2>{contract.location.street} {contract.location.streetNumber}</h2>
                    {console.log(contract)}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Contracts;