
import './ContractDetails.scss'
import { ProgressBar } from 'react-loader-spinner';

const ContractDetails = ({contract}) => {
  

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