import React from 'react';
import Chart from "react-apexcharts";

class ChartSd extends React.Component {
    
    constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: "pie"
        },
        colors: ['#DC143C', '#F0E68C', '#00FA9A'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'REALISASI APBD KAB. JAYAPURA',
          align: 'left'
        },
        xaxis: {
          categories: ['FISIK','KEUANGAN']
        }
      },
      series: [
        {
          name: "FISIK",
          data: ['34.30', '33.21']
        },
        {
          name: "KEUANGAN",
          data: ['11.30', '42.21']
        },
      ]
    };
  }

  render() {
        return (
            <div>
              <div className="ui segment">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="100%"
                    height="200%"
                />
              </div>
              
            </div>
        );
    };
}

export default ChartSd;