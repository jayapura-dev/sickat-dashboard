import React from 'react';
import { connect } from 'react-redux';
import { fetchSumberdana } from '../actions';
import RealisasiUmum from './RealisasiUmum';
import Realisasipd from './Realisasipd';

import NumberFormat from 'react-number-format';

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
                      <th rowspan="2">SUMBER DANA</th>
                      <th rowspan="2" className="ui center aligned">PAGU</th>
                      <th rowspan="2" className="ui center aligned">REALISASI UANG</th>
                      <th rowspan="2" className="ui center aligned">SISA</th>
                      <th className="ui center aligned" colspan="2">PROSENTASE</th>
                    </tr>
                    <tr>
                      <th>PK (%)</th>
                      <th>PF (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.sumberdana.map(item => (
                     <tr key={item.sumber_dana}>
                       <td className="uppercase">{item.sumber_dana}</td>
                       <td><NumberFormat value={item.pagu} displayType={'text'} thousandSeparator={true} /></td>
                       <td><NumberFormat value={item.rk} displayType={'text'} thousandSeparator={true} /></td>
                       <td><NumberFormat value={item.sisa} displayType={'text'} thousandSeparator={true} /></td>
                       <td className="ui center aligned">{item.pk}</td>
                       <td className="ui center aligned">{item.pf}</td>
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
              <div className="ui divider"></div>
              <Realisasipd />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { sumberdana:  Object.values(state.sumberdana) };
}

export default connect(mapStateToProps, { fetchSumberdana })(DataSumberdana);