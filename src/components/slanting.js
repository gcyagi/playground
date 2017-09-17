import React from 'react';
import TestImage from './image';
import './../css/slanting.css'

class testSlanting extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="inBoxContent">
          <div className="inBoxText">斜めCSSとGophar(中央揃え)</div>
          <TestImage />
        </div>
      </div>
    )
  }
}
export default testSlanting;