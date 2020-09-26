import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../partials/Header';
import Footer from '../partials/Footer';

import Sumberdana from './Sumberdana';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                    <Header />
                        <br />
                        <br />
                        <br />
                    <Switch>
                        <Route path="/" exact component={Sumberdana} />
                        <Route exact path="/" component="" />
                        <Route path="/Contack" component="" />
                    </Switch>
                    
                </BrowserRouter>
                <br />
                <Footer />
            </div>
        );
    }
}

export default App;