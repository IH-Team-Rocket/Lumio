import React from 'react';
import Chart from 'react-apexcharts';

const DashboardChart = (props) => { 
  
  /* const series = [
    name: 
    data {propData.data.map(bill => {
    return bill.powerUsed
  })}] */

  /* const series = propData.data.map(bill =>{
      console.log(bill);
      return {
        name: bill.createdAt,
        data: bill.powerUsed
      }
    }
  ) */

  const series = [{
    name: "Power used",
    data: props.data
  }]

  console.log('series', series);
  const options = {
    chart: { id: props.chartType},
    xaxis: {
      categories: props.xName
    }
  }

  return (
    <div>
      <Chart 
        options={options}
        series={series}
        type={props.chartType}
        width={props.width}
      />
    </div>
  );
};

export default DashboardChart;