
import './ContractDetails.scss'
import { ProgressBar } from 'react-loader-spinner';
import { getBills } from '../../../../services/BillService';
import { useEffect } from 'react';
import { useState } from 'react';

const ContractDetails = ({contract}) => {

  const [ bills, setBills ] = useState([])
  
  console.log(bills);

  const sortFunction = (a , b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  }

  useEffect(() => {
    getBills()
      .then(bills => {
        return bills.filter(bill => bill.contract.id === contract.id).sort(sortFunction)
      })
      .then(filteredBills => {
        setBills(filteredBills.slice(0, 19))
      })
      .catch(err => console.error(err))
  }, [contract])
  
  // console.log('bills', bills[0] ? bills[0].contract.location.street : "");
  return contract ? (
    <div className='contract-container'>
      <h2>{contract.location.street} {contract.location.streetNumber}, {contract.location.city}</h2>
      <div className='content'>
        <div className='contract-info'>
          <div className='details'>
            <h3>Details</h3>
            <p>{contract.id}</p>
            <p>{contract.location.postalCode}</p>
            <p>{contract.price}</p>
            <p>{contract.solarPanels}</p>
            <p>{contract.powerPerPanel}</p>
            <p>{contract.user}</p>
            <p>{contract.createdAt}</p>
          </div>
          <div className='billing'>
            <h3>Billing</h3>
            <div>
              <p>Tarjetas y demas</p>
            </div>
          </div>
        </div>
        <div className='bills'>
          <h3>Bills</h3>
          {bills.map(bill => {
            return (
              <p>{bill.createdAt}</p>
            )
          })}
        </div>
      </div>
    </div>
  ) : (
    <div className='loader-container'>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor = '#020E31'
        barColor = '#FF9600'
      />
    </div>
  );
};

export default ContractDetails;