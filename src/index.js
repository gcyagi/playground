import React from 'react';
import ReactDOM from 'react-dom';

import Test from './components/test';
import Game from './components/game';
import Grid from './components/grid';
import Header from './components/header';
import Slanting from './components/slanting';
import { BrowserRouter, Route} from 'react-router-dom'
import './css/index.css';

class Training extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="training">
            <div className="head">
              <Header />
            </div>
            <div className="mainContent">
              <div>
                <Route exact path='/' component={Test} />
                <Route path='/game' component={Game} />
                <Route path='/slanting' component={Slanting}/>
                <Route path='/grid' component={Grid}/>
              </div>
              <div className="map">
              </div>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <Training />,
  document.getElementById('root')
);
