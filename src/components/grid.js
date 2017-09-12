import React from 'react';
import './../css/grid.css';

class testGrid extends React.Component {
  render() {
    return (
      <div className="testGrid">
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-24">1-24</div>
        <div className="pure-u-1-12">1-12</div>
        <div className="pure-u-1-12">1-12</div>
        <div className="pure-u-1-12">1-12</div>
        <div className="pure-u-1-12">1-12</div>
        <div className="pure-u-1-6">1-6</div>
        <div className="pure-u-1-6">1-6</div>
        <div className="pure-u-1-12">1-12</div>
        <div className="horizon">
          <div className="pure-u-1-3 horizonOne">#08708A</div>
          <div className="pure-u-1-3 horizonTwo">#56B1BF</div>
          <div className="pure-u-1-3 horizonThree">#D0D3C5</div>
        </div>
        <div className="colorPalleteRedTone">
          <div className="pure-u-1-4 myColorRed_0">#FF2A2C</div>
          <div className="pure-u-1-4 myColorRed_1">#B50100</div>
          <div className="pure-u-1-4 myColorRed_2">#EC9A98</div>
          <div className="pure-u-1-4 myColorRed_3">#F8EEF1</div>
        </div>
        <div className="colorPalleteBlueTone">
          <div className="pure-u-1-4 myColorBlue_0">#003066</div>
          <div className="pure-u-1-4 myColorBlue_1">#024096</div>
          <div className="pure-u-1-4 myColorBlue_2">#06C2F4</div>
          <div className="pure-u-1-4 myColorBlue_3">#97EAF4</div>
        </div>
        <div className="colorPalleteGreenTone">
          <div className="pure-u-1-4 myColorGreen_0">#404616</div>
          <div className="pure-u-1-4 myColorGreen_1">#668D3C</div>
          <div className="pure-u-1-4 myColorGreen_2">#B1DDA1</div>
          <div className="pure-u-1-4 myColorGreen_3">#E5F3CF</div>
        </div>
        <div className="colorPalleteYellowTone">
          <div className="pure-u-1-4 myColorYellow_0">#FFAC00</div>
          <div className="pure-u-1-4 myColorYellow_1">#FFD319</div>
          <div className="pure-u-1-4 myColorYellow_2">#FFFF00</div>
          <div className="pure-u-1-4 myColorYellow_3">#FFFF49</div>
        </div>
      </div>
    )
  }
}
export default testGrid;
