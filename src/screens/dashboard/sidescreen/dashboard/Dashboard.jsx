import React, { useEffect, useState } from 'react';
import DashboardChart from '../../../../components/dashboard/DashboardChart/DashboardChart';
import { getBills } from '../../../../services/BillService';
import './Dashboard.scss'
import WeatherWidget from '../../../../components/weather/WeatherWidget';
import ContractSelect from '../../../../components/misc/contract-select/ContractSelect';
import { getCurrentUser } from '../../../../services/UserService';
import { getContract, getContracts } from '../../../../services/ContractService';
import { ProgressBar } from 'react-loader-spinner';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const toMonthName= (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  const [ contracts, setContracts] = useState([])
  const [ contractSelected, setContractSelected] = useState()
  const [ data, setData ] = useState([])
  const [ chartFilter, setChartFilter ] = useState(-12)
  const [ city, setCity] = useState()
  
  const handleTotal = () =>{
    setChartFilter(0)
  }
  const handleYearly = () => {
    setChartFilter(-12)
  }
  
  const sortFunction = (a , b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  }

  useEffect(() => {
    getCurrentUser()
      .then(user => {
        getContracts(user)
          .then(contractsFetched => {
            setContracts(contractsFetched)
						setContractSelected(contractsFetched[0].id);
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    getBills()
      .then(bills => {
        return bills.filter(bill => bill.contract.id === contractSelected).sort(sortFunction)
      })
      .then(filteredBills => {
        setData(filteredBills.slice(chartFilter))
      })
      .catch(err => console.error(err))
  }, [chartFilter, contractSelected])

  const powerUsed = data.map(bill => {
    return bill.powerUsed
  })
  const month = data.map(bill => {
    return toMonthName(bill.createdAt.split('-').slice(1,-1).toString())
  })

  useEffect(() => {
    getContract(contractSelected)
    .then(contract => {
      setCity(contract.location.city)
    })
    .catch(err => console.error(err))
  }, [contractSelected])

  const createToast = function () {
    toast.success("This is a toast")
  }


  return data[0] ? (

    <div className='dashboard-container'>
      <h2 className='dashboard-title'>Dashboard</h2>
      <div className='dashboard-content'>
        <ContractSelect
          contracts={contracts}
          contractSelected={contractSelected}
          setContractSelected={setContractSelected}
        />
        <div className='first-row'>
          <div className="power-used-chart">
            <button onClick={handleYearly}>Yearly</button>
            <button onClick={handleTotal}>Total</button>
            <DashboardChart 
              data={powerUsed}
              xName={month}
              chartType="area"
              contractSelected={contractSelected}
            />
          </div>
          <div className="power-used-chart">
            <button onClick={handleYearly}>Yearly</button>
            <button onClick={handleTotal}>Total</button>
            <DashboardChart 
              data={powerUsed}
              xName={month}
              chartType="area"
              contractSelected={contractSelected}
            />
          </div>
        </div>
        <div className='second-row'>
          <div className='chart-container'>
            <button onClick={createToast}>Press me!</button>
          </div>
          <div className='weather-container'>
            <WeatherWidget city={city} contractSelected={contractSelected}/>
          </div>
        </div>
      </div>
    </div> ) : (
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

export default Dashboard;