import React from 'react';
import { connect } from 'react-redux';
import { fetchRealisasiPd } from '../../actions';
import NumberFormat from 'react-number-format';

import ReactToPrint from 'react-to-print';

import '../styles/print.css';

class Print_Realisasipd extends React.Component {
    componentDidMount() {
        this.props.fetchRealisasiPd();
    }

    renderList(){
        return (
            <div>
                <div className="title">
                    <table style={{width: '100%' }} >
                        <tr><td colspan='2' align='center'><text className="lg-text">PEMERINTAH KABUPATEN JAYAPURA</text></td></tr>
                        <tr><td colspan='2' align='center'><text className="lg-text">BADAN PERENCANAAN PEMBANGUNAN DAERAH</text></td></tr>
                    </table>
                    <hr />
                    <table style={{ width: '100%' }} >
                        <tr><td colspan='2' align='center'>REALISASI FISIK DAN KEUANGAN PERANGKAT DAERAH (UMUM)</td></tr>
                    </table>
                    <br />
                    <table className="table" style={{ width: '100%' , border: '1px' }} >
                        <thead>
                            <tr className="header">
                                <th className="text-center" rowspan="2" scope="rowgroup">NO</th>
                                <th rowspan="2" scope="rowgroup">PERANGKAT DAERAH</th>
                                <th rowspan="2" scope="rowgroup">PAGU</th>
                                <th colspan="2" scope="colgroup" className="text-center">REALISASI</th>
                                <th colspan="2" scope="colgroup" className="text-center">PROSENTASE</th>
                                <th colspan="3" scope="colgroup" className="text-center">PROGRAM</th>
                                <th colspan="3" scope="colgroup" className="text-center">KEGIATAN</th>
                            </tr>
                            <tr className="header">
                                <th className="text-center"> Keuangan</th>
                                <th className="text-center"> SISA</th>
                                <th className="text-center"> PK(%)</th>
                                <th className="text-center"> PF(%)</th>
                                <th className="text-center"> JP</th>
                                <th className="text-center"> JPT</th>
                                <th className="text-center"> JPBT</th>
                                <th className="text-center"> JK</th>
                                <th className="text-center"> JKT</th>
                                <th className="text-center"> JKBT</th>
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
                                <td className="text-center">{item.pk}</td>
                                <td className="text-center">{item.pf}</td>
                                <td className="text-center">{item.jp}</td>
                                <td className="text-center">{item.jpt}</td>
                                <td className="text-center">{item.jp - item.jpt}</td>
                                <td className="text-center">{item.jk}</td>
                                <td className="text-center">{item.jkt}</td>
                                <td className="text-center">{item.jk - item.jkt}</td>
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
                <ReactToPrint
                    trigger={() => <a href="#">Print this out!</a>}
                    content={() => this.componentRef}
                />
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { realisasipd:  Object.values(state.realisasipd) };
}

export default connect(mapStateToProps, { fetchRealisasiPd })(Print_Realisasipd);