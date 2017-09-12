import React from 'react';

class Test extends React.Component {
  render() {
    return (
      <div className="pure-menu pure-menu-scrollable custom-restricted">
        <a href="http://www.google.com" className="pure-menu-link pure-menu-heading">Search on Google</a>
        <ul className="pure-menu-list">
            <li className="pure-menu-item"><a href="https://www.google.co.jp/imghp?hl=ja&tab=wi" className="pure-menu-link">Serch Picture on Goole</a></li>
            <li className="pure-menu-item"><a href="https://s3-ap-northeast-1.amazonaws.com/y4039.net/EOS_Rep02/index.html" className="pure-menu-link">My Riot Practice</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
            <li className="pure-menu-item"><a href="" className="pure-menu-link">Test</a></li>
        </ul>
      </div>
    );
  }
}

export default Test;
