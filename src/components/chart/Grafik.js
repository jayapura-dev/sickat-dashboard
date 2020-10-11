import React from 'react';

import SumberDana from './ChartSd';
import All from './ChartAll';
import RealisasiUmum from '.././RealisasiUmum';

class Grafik extends React.Component {
    render() {
        return (
            <div>
                <RealisasiUmum />
                <div className="ui grid">
                    <div className="eight wide column">
                        <SumberDana />
                    </div>
                    <div className="four wide column">
                        <All />
                    </div>
                </div>
            </div>
        )
    }
}

export default Grafik;