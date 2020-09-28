import './styles/card.css';
import React from 'react';
import sickat from '../api/sickat';

class RealisasiUmum extends React.Component {
    state = ({ umum: [] })

    async componentDidMount() {
        const response = await sickat.get('/realisasiumum/');
        this.setState({ umum: response.data.result });
    }

    renderBody() {
        return (
            <div className="">
              <div className="ui four column stackable grid">
                <div className="column">
                  <div className="ui fluid card teals">
                    <div className="content">
                      <div className="right-text">
                        <h5>PAGU :</h5>
                        <div className="desription"><h4>{this.state.umum.map(u =>(u.pagu))}</h4></div>
                        
                      </div>
                      <div className="left-img"><img width="30%" src="assets/images/pay.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui fluid card yellow">
                    <div className="content">
                      <div className="right-text">
                        <h5>KEUANGAN :</h5>
                        <div className="desription"><h3>{this.state.umum.map(u =>(u.rk))}</h3></div>
                        
                      </div>
                      <div className="left-img"><img width="30%" src="assets/images/salary.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui fluid card pink">
                    <div className="content">
                      <div className="right-text">
                        <h5>PK :</h5>
                        <div className="desription"><h3>{this.state.umum.map(u =>(u.pk))} %</h3></div>
                        
                      </div>
                      <div className="left-img"><img width="30%" src="assets/images/pie-chart.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ui fluid card green">
                    <div className="content">
                      <div className="right-text">
                        <h5>PF :</h5>
                        <div className="desription"><h3>{this.state.umum.map(u =>(u.pf))} %</h3></div>
                        
                      </div>
                      <div className="left-img"><img width="30%" src="assets/images/research.png" alt="logo" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }

    render() {
        return (
            <div>
              {this.renderBody()}
            </div>
        )
    }
}

export default RealisasiUmum;