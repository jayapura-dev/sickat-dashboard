import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="inverted">
            <div className="ui container">
                <div className="ui green fixed inverted menu">
                    <div className="item">
                        <img src="/assets/images/logo-kabupaten.png" alt="logo" />
                    </div>
                    <li className="active item">
                        <Link to="/">Matriks</Link>
                    </li>
                    <li className="item">
                       <Link to="/Contack">Grafik</Link>
                    </li>
                    <li className="item">
                        <Link to="/"></Link>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Header;