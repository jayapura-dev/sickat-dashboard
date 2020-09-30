import React from 'react';
import { connect } from 'react-redux';
import { fetchRealisasiPd } from '../actions';
import NumberFormat from 'react-number-format';
import ReactToPdf from 'react-to-pdf';

class Realisasipd extends React.Component {
    componentDidMount() {
        this.props.fetchRealisasiPd();
    }

    renderList(){
        const ref = React.createRef();
        const options = {
            orientation: 'landscape',
            unit: 'in',
        };
        return (
            <div>
              <div className="ui segment">
                <div className="ui header">
                  REALISASI UMUM (PERANGAKAT DAERAH)
                </div>
                <ReactToPdf targetRef={ref} filename="Realisasi PD.pdf" options={options}>
                  {({toPdf}) => (
                      <button className="ui button primary" onClick={toPdf}><i class="print icon"></i> Export</button>
                  )}
                </ReactToPdf>
                <hr />
                <div style={{width: 1330, height: 2330, background: 'white'}} ref={ref}>
                    <table className="ui teal celled table small">
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
                        <td><NumberFormat value={item.pagu_keu} displayType={'text'} thousandSeparator={true} /></td>
                        <td><NumberFormat value={item.rk} displayType={'text'} thousandSeparator={true} /></td>
                        <td><NumberFormat value={item.sisa} displayType={'text'} thousandSeparator={true} /></td>
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
                    <tfoot>
                      <tr>
                        <th></th>
                        <th>54 PERANGKAT DAERAH</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
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