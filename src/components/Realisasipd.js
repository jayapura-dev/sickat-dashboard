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
                      <th>No</th>
                      <th>PERANNGKAT DAERAH</th>
                      <th className="ui center aligned">PAGU</th>
                      <th className="ui center aligned">REALISASI UANG</th>
                      <th className="ui center aligned">SISA</th>
                      <th className="ui center aligned">PK (%)</th>
                      <th className="ui center aligned">PF (%)</th>
                      <th className="ui center aligned">JP</th>
                      <th className="ui center aligned">JPT</th>
                      <th className="ui center aligned">JK</th>
                      <th className="ui center aligned">JKT</th>
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
                       <td>{item.pk}</td>
                       <td>{item.pf}</td>
                       <td>{item.jp}</td>
                       <td>{item.jpt}</td>
                       <td>{item.jk}</td>
                       <td>{item.jkt}</td>
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