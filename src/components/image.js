import React from 'react';
import './../css/image.css';

class testImage extends React.Component {
  render() {
    return (
      <img className="testImage" src={require("../img/gopher_wfmu.png")} alt="goLang" />
    )
  }
}
export default testImage;
