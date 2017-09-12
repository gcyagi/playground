import React from 'react';
import './../css/grid.css';

class testGrid extends React.Component {
  render() {
    return (
      <div className="testGrid">
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">　1-24</div>
        <div className="pure-u-1-12 defaultColor gridItem">　1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">　1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">　1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">　1-12</div>
        <div className="pure-u-1-6 defaultColor gridItem">　1-6</div>
        <div className="pure-u-1-6 defaultColor gridItem">　1-6</div>
        <div className="pure-u-1-12 defaultColor gridItem">　1-12</div>
        <div className="horizon">
          <div className="pure-u-1-3 horizonOne">　#08708A</div>
          <div className="pure-u-1-3 horizonTwo">　#56B1BF</div>
          <div className="pure-u-1-3 horizonThree">　#D0D3C5</div>
        </div>
        <div className="colorPalleteRedTone">
          <div className="pure-u-1-4 myColorRed_0 gridItem">　#B50100</div>
          <div className="pure-u-1-4 myColorRed_1 gridItem">　#FF2A2C</div>
          <div className="pure-u-1-4 myColorRed_2 gridItem">　#EC9A98</div>
          <div className="pure-u-1-4 myColorRed_3 gridItem">　#F8EEF1</div>
        </div>
        <div className="colorPalleteBlueTone">
          <div className="pure-u-1-4 myColorBlue_0 gridItem">　#003066</div>
          <div className="pure-u-1-4 myColorBlue_1 gridItem">　#024096</div>
          <div className="pure-u-1-4 myColorBlue_2 gridItem">　#06C2F4</div>
          <div className="pure-u-1-4 myColorBlue_3 gridItem">　#97EAF4</div>
        </div>
        <div className="colorPalleteGreenTone">
          <div className="pure-u-1-4 myColorGreen_0 gridItem">　#404616</div>
          <div className="pure-u-1-4 myColorGreen_1 gridItem">　#668D3C</div>
          <div className="pure-u-1-4 myColorGreen_2 gridItem">　#B1DDA1</div>
          <div className="pure-u-1-4 myColorGreen_3 gridItem">　#E5F3CF</div>
        </div>
        <div className="colorPalleteYellowTone">
          <div className="pure-u-1-4 myColorYellow_0 gridItem">　#FFAC00</div>
          <div className="pure-u-1-4 myColorYellow_1 gridItem">　#FFD319</div>
          <div className="pure-u-1-4 myColorYellow_2 gridItem">　#FFFF00</div>
          <div className="pure-u-1-4 myColorYellow_3 gridItem">　#FFFF55</div>
        </div>
        <div className="colorPalleteGradation">
          <div className="pure-u-1-5 myColorYellow_0 gridItem">　#FFAC00</div>
          <div className="pure-u-1-5 myColorYellow_1 gridItem">　#FFD319</div>
          <div className="pure-u-1-5 myColorYellow_3 gridItem">　#FFFF55</div>
          <div className="pure-u-1-5 myColorYellow_2 gridItem">　#FFFF00</div>
          <div className="pure-u-1-5 myColorYellow_1 gridItem">　#FFD319</div>
        </div>
      </div>
    )
  }
}
export default testGrid;
