import React from 'react';
import { connect } from 'react-redux';
import { fetchSumberdana } from '../actions';
import RealisasiUmum from './RealisasiUmum';

class DataSumberdana extends React.Component {
    componentDidMount() {
        this.props.fetchSumberdana();
    }

    renderList(){
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  REALISASI PER SUMBER DANA
                </div>
                <table className="ui celled table striped small">
                  <thead>
                    <tr>
                      <th>SUMBER DANA</th>
                      <th className="ui center aligned">PAGU</th>
                      <th className="ui center aligned">Realisasi Uang</th>
                      <th className="ui center aligned">PK (%)</th>
                      <th className="ui center aligned">PF (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.sumberdana.map(item => (
                     <tr key={item.sumber_dana}>
                       <td className="uppercase">{item.sumber_dana}</td>
                       <td>{item.pagu}</td>
                       <td>{item.rk}</td>
                       <td>{item.pk}</td>
                       <td>{item.pf}</td>
                     </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
        );
    };

    render() {
        return (
            <div>
              <RealisasiUmum />
              <div className="ui divider"></div>
              {this.renderList()}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { sumberdana:  Object.values(state.sumberdana) };
}

export default connect(mapStateToProps, { fetchSumberdana })(DataSumberdana);