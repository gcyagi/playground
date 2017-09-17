import React from 'react';
import Title from './title';
import LogoImage from './logo';
import { Link } from 'react-router-dom'
import './../css/menu.css';

class header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="pure-menu pure-menu-horizontal dropDownMenu">
          <ul className="pure-menu-list">
           <div className="pure-menu-item pure-menu-has-children pure-menu-allow-hover">menu
              <ul className="pure-menu-children jumpTo">
                <li className="pure-menu-item"><Link to='/'>Home</Link></li>
                <li className="pure-menu-item"><Link to='/slanting'>ななめ</Link></li>
                <li className="pure-menu-item"><Link to='/game'>ゲーム</Link></li>
                <li className="pure-menu-item"><Link to='/grid'>グリッド</Link></li>
              </ul>
            </div>
          </ul>
        </div>
        <LogoImage className="pure-u-lg-1-3 pure-u-md-1-5" />
        <Title className="pure-u-lg-1-3 pure-u-md-1-5" />
      </div>
    )
  }
}
export default header;
