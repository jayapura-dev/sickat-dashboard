import React from 'react';
import Chart from "react-apexcharts";

class ChartSd extends React.Component {
    
    constructor(props) {
    super(props);
    
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        colors: ['#DC143C', '#F0E68C', '#00FA9A'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'REALISASI SUMBER DANA',
          align: 'left'
        },
        xaxis: {
          categories: ['DAU', 'DAK', 'OTSUS', 'PAD','DBH','DID']
        }
      },
      series: [
        {
          name: "FISIK",
          data: ['34.30', '33.21', '28.12', '65.27','4.23','55.33']
        },
        {
          name: "KEUANGAN",
          data: ['11.30', '42.21', '45.12', '14.27','64.23','9.33']
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
                    type="line"
                    width="100%"
                    height="200%"
                />
              </div>
              
            </div>
        );
    };
}

export default ChartSd;