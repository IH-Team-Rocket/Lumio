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

  return data[1] ? (
    <div className="power-used-chart">
    <h1>YOLO</h1>
      <button onClick={handleYearly}>Yearly</button>
      <button onClick={handleTotal}>Total</button>
      <DashboardChart 
        data={powerUsed}
        xName={month}
        chartType="area"
        width={500}
      />
    </div>) : (
      <p>Loading...</p>
  );
};

export default Dashboard;