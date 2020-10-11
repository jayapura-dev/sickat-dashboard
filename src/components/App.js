import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Dau from './RealisasiDau';
import Dak from './RealisasiDak';
import Otsus from './RealisasiOtsus';
import Pad from './RealisasiPad';
import Dbh from './RealisasiDbh';
import Did from './RealisasiDid';

import Sumberdana from './Sumberdana';

import Grafik from './chart/Grafik';

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="ui segment">
                    <br/>
                    <BrowserRouter>
                        <Header />
                            <br />
                            <br />
                            <br />
                        <Switch>
                            <Route path="/" exact component={Sumberdana} />
                            <Route path="/Dau" component={Dau} />
                            <Route path="/Dak" component={Dak} />
                            <Route path="/Otsus" component={Otsus} />
                            <Route path="/Pad" component={Pad} />
                            <Route path="/Dbh" component={Dbh} />
                            <Route path="/Did" component={Did} />
                            <Route path="/Grafik" component={Grafik} />
                        </Switch>
                        
                    </BrowserRouter>
                    <br />
                    
                </div>
                <Footer />
            </div>
            
        );
    }
}

export default App;