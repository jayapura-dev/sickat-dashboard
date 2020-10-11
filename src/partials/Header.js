import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="inverted">
            <div className="ui container">
                <div className="ui teal fixed inverted menu">
                    <div className="item">
                        <img src="/assets/images/logo-kabupaten.png" alt="logo" />
                    </div>
                    <li className="active item">
                        <Link to="/">Matriks</Link>
                    </li>
                    <li className="item">
                       <Link to="/Grafik">Grafik</Link>
                    </li>
                
                    <div className="ui simple dropdown item">
                        Realisasi <i className="dropdown icon"></i>
                        <div className="menu">
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Dau">Dana Alokasi Umum</Link>
                            </li>
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Dak">Dana Alokasi Khusus</Link>
                            </li>
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Otsus">Dana Otonomi Khusus</Link>
                            </li>
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Pad">Dana Pendapatan Asli Daerah</Link>
                            </li>
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Dbh">Dana Bagi Hasil</Link>
                            </li>
                            <li className="item">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Did">Dana Insentif Daerah</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;