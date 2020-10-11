import React from 'react';
import { connect } from 'react-redux';
import { fetchRealisasiDid } from '../actions';
import NumberFormat from 'react-number-format';
import ReactToPdf from 'react-to-pdf';

class RealisasiDid extends React.Component {
    componentDidMount() {
        this.props.fetchRealisasiDid();
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
                  <h4>REALISASI DID (PERANGAKAT DAERAH)</h4>
                </div>
                <ReactToPdf targetRef={ref} filename="Realisasi PD.pdf" options={options}>
                  {({toPdf}) => (
                      <button className="ui button primary" onClick={toPdf}><i className="print icon"></i> Export</button>
                  )}
                </ReactToPdf>
                <hr />
                <div style={{background: 'white'}} ref={ref}>
                    <table className="ui teal celled table small">
                      <thead>
                        <tr>
                          <th rowSpan="2">No</th>
                          <th rowSpan="2">PERANNGKAT DAERAH</th>
                          <th rowSpan="2" className="ui center aligned">PAGU</th>
                          <th rowSpan="2" className="ui center aligned">REALISASI UANG</th>
                          <th rowSpan="2" className="ui center aligned">SISA</th>
                          <th className="ui center aligned" colSpan="2">PROSENTASE (%)</th>
                          <th className="ui center aligned" colSpan="3">PROGRAM</th>
                          <th className="ui center aligned" colSpan="3">KEGIATAN</th>
                        </tr>
                        <tr>
                          <th>PK</th>
                          <th>PF</th>
                          <th>JPT</th>
                          <th>JP</th>
                          <th>JPBT</th>
                          <th>JK</th>
                          <th>JKT</th>
                          <th>JKBT</th>
                        </tr>
                      </thead>
                    <tbody>
                      {this.props.did.map(item => (
                      <tr key={item.id_pd}>
                        <td>{item.no}</td>
                        <td className="uppercase">{item.pd}</td>
                        <td><NumberFormat value={item.pagu_sumberdana} displayType={'text'} thousandSeparator={true} /></td>
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
    return { did:  Object.values(state.did) };
}

export default connect(mapStateToProps, { fetchRealisasiDid })(RealisasiDid);