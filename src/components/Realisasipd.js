import React from 'react';
import { connect } from 'react-redux';
import { fetchRealisasiPd } from '../actions';

class Realisasipd extends React.Component {
    componentDidMount() {
        this.props.fetchRealisasiPd();
    }

    renderList(){
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  REALISASI UMUM (PERANGAKAT DAERAH)
                </div>
                <table className="ui celled table striped small">
                  <thead>
                    <tr>
                      <th rowspan="2">No</th>
                      <th rowspan="2">PERANNGKAT DAERAH</th>
                      <th rowspan="2" className="ui center aligned">PAGU</th>
                      <th rowspan="2" className="ui center aligned">REALISASI UANG</th>
                      <th rowspan="2" className="ui center aligned">SISA</th>
                      <th className="ui center aligned" colspan="2">PROSENTASE</th>
                      <th className="ui center aligned" colspan="3">PROGRAM</th>
                      <th className="ui center aligned" colspan="3">KEGIATAN</th>
                    </tr>
                    <tr>
                      <th>PK (%)</th>
                      <th>PF (%)</th>
                      <th>JPT</th>
                      <th>JP</th>
                      <th>JPBT</th>
                      <th>JK</th>
                      <th>JKT</th>
                      <th>JKBT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.realisasipd.map(item => (
                     <tr key={item.id_pd}>
                       <td>{item.no}</td>
                       <td className="uppercase">{item.pd}</td>
                       <td>{item.pagu_keu}</td>
                       <td>{item.rk}</td>
                       <td>{item.sisa}</td>
                       <td className="ui center aligned">{item.pk}</td>
                       <td className="ui center aligned">{item.pf}</td>
                       <td className="ui center aligned">{item.jp}</td>
                       <td className="ui center aligned">{item.jpt}</td>
                       <td className="ui center aligned">{item.jp - item.jpt}</td>
                       <td className="ui center aligned">{item.jk}</td>
                       <td className="ui center aligned">{item.jkt}</td>
                       <td className="ui center aligned">{item.jk - item.jkt}</td>
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
              {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { realisasipd:  Object.values(state.realisasipd) };
}

export default connect(mapStateToProps, { fetchRealisasiPd })(Realisasipd);