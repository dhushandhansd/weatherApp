import React from 'react';
import './App.css';
import Weather from './Components/Weather';
import WeatherCNE from './Components/WeatherCNE';
import WeatherCBE from './Components/WeatherCBE';
import WeatherOTY from './Components/WeatherOTY';
import WeatherPCY from './Components/WeatherPCY';
import WeatherTRY from './Components/WeatherTRY';
import WeatherERD from './Components/WeatherERD';
import WeatherTNY from './Components/WeatherTNY';
import WeatherSLM from './Components/WeatherSLM';
import WeatherMDU from './Components/WeatherMDU';
import WeatherNMK from './Components/WeatherNMK';

import { Route, HashRouter as Router, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="main">
            <Route exact path='/' component={Weather} />
            <Route exact path='/chennai' component={WeatherCNE} />
            <Route exact path='/coimbatore' component={WeatherCBE} />
            <Route exact path='/ooty' component={WeatherOTY} />
            <Route exact path='/pollachi' component={WeatherPCY} />
            <Route exact path='/trichy' component={WeatherTRY} />
            <Route exact path='/erode' component={WeatherERD} />
            <Route exact path='/theni' component={WeatherTNY} />
            <Route exact path='/salem' component={WeatherSLM} />
            <Route exact path='/madurai' component={WeatherMDU} />
            <Route exact path='/namakkal' component={WeatherNMK} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
