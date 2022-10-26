import React, { useEffect, useState } from 'react';
import DashboardChart from '../../../../components/dashboard/DashboardChart/DashboardChart';
import { getBills } from '../../../../services/BillService';
import './Dashboard.scss'

const Dashboard = () => {
  const toMonthName= (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }

  const [ data, setData ] = useState([])
  const [ chartFilter, setChartFilter ] = useState(-12)
  
  console.log(chartFilter);
  const handleTotal = () =>{
    setChartFilter(0)
  }
  const handleYearly = () => {
    setChartFilter(-12)
  }


  useEffect(() => {
    getBills()
      .then(bills => {
        setData(bills.slice(chartFilter))
      })
      .catch(err => console.error(err))
  }, [chartFilter])

  const powerUsed = data.map(bill => {
    return bill.powerUsed
  })
  const month = data.map(bill => {
    return toMonthName(bill.createdAt.split('-').slice(1,-1).toString())
  })

  return data[0] ? (
    <div className='dashboard-container'>
      <h2 className='dashboard-title'>Dashboard</h2>
      <div className='dashboard-content'>
        <div className="power-used-chart">
          <button onClick={handleYearly}>Yearly</button>
          <button onClick={handleTotal}>Total</button>
          <DashboardChart 
            data={powerUsed}
            xName={month}
            chartType="area"
          />
        </div>
        <div className="power-used-chart">
          <button onClick={handleYearly}>Yearly</button>
          <button onClick={handleTotal}>Total</button>
          <DashboardChart 
            data={powerUsed}
            xName={month}
            chartType="area"
          />
        </div>
      </div>
    </div>) : (
      <p>Loading...</p>
  );
};

export default Dashboard;