import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../partials/Header';
//import Footer from '../partials/Footer';

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
                        <Route exact path="/" component="" />
                    </Switch>
                    
                </BrowserRouter>
                <br />
            </div>
        );
    }
}

export default App;