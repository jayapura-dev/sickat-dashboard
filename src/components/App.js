import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../partials/Header';
//import Footer from '../partials/Footer';
import Dau from './RealisasiDau';
import Dak from './RealisasiDak';
import Otsus from './RealisasiOtsus';

import Sumberdana from './Sumberdana';

class App extends React.Component {
    render() {
        return (
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
                    </Switch>
                    
                </BrowserRouter>
                <br />
            </div>
        );
    }
}

export default App;