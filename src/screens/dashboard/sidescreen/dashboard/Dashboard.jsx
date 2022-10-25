import React, { useEffect, useState } from 'react';
import DashboardChart from '../../../../components/dashboard/DashboardChart/DashboardChart';
import { getBills } from '../../../../services/BillService';

const Dashboard = () => {

  const [ data, setData ] = useState([])

  useEffect(() => {
    getBills()
      .then(bills => {
        console.log('this is bills:', bills);
        setData(bills)
      })
      .catch(err => console.error(err))
  }, [])

  console.log('this is data:', data);

  return data[1] ? (
    <div>
    <h1>YOLO</h1>
      <DashboardChart 
        yName="kWh"
        propData={data}
        xName="Month"
        chartType="bar"
        width="500"
      />
    </div>) : (
      <p>Loading...</p>
  );
};

export default Dashboard;