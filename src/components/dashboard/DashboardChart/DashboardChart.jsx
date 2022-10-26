import React from 'react';
import Chart from 'react-apexcharts';

const DashboardChart = (props) => { 

  const series = [{
    name: "Power used",
    data: props.data
  }]

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