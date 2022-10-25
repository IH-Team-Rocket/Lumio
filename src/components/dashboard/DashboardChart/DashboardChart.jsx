import React from 'react';
import Chart from 'react-apexcharts';

const DashboardChart = (propData, xName, chartType, width) => { 
  console.log('this is propData:', propData);
  const series = propData.map(bill => {
    return  {
      name: bill.id,
      data: {...bill}
    }
  });

  const options = {
    chart: { id: chartType},
    xaxis: {
      categories: xName
    }
  }

  return (
    <div>
      <Chart 
        options={options}
        series={series}
        type={chartType}
        width={width}
      />
    </div>
  );
};

export default DashboardChart;