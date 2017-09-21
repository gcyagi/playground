import React from 'react';

import 'purecss';
import './../css/grid.css';


class testGrid extends React.Component {
  render() {
    return (
      <div className="testGrid">

        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-24 defaultColor gridItem">1-24</div>
        <div className="pure-u-1-12 defaultColor gridItem">1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">1-12</div>
        <div className="pure-u-1-12 defaultColor gridItem">1-12</div>
        <div className="pure-u-1-6 defaultColor gridItem">1-6</div>
        <div className="pure-u-1-6 defaultColor gridItem">1-6</div>
        <div className="pure-u-1-12 defaultColor gridItem">1-12</div>

        <div className="horizon">
          <div className="pure-u-1-3 horizon_1 gridItem">#08708A</div>
          <div className="pure-u-1-3 horizon_2 gridItem">#56B1BF</div>
          <div className="pure-u-1-3 horizon_3 gridItem">#D0D3C5</div>
        </div>

        <div className="pure-g">
          <div className="colorPalette greenTone pure-u-md-1-2 pure-u-lg-1-4">
            <img className="sampleImage pure-u-2-3" src={require("../img/radybug.JPG")} alt="spring" />
            <div className="colors pure-u-1-3">
              <div className="myColorGreen_0 gridItem paletteItem">#385918</div>
              <div className="myColorGreen_1 gridItem paletteItem">#9DAD53</div>
              <div className="myColorGreen_2 gridItem paletteItem">#A1B258</div>
              <div className="myColorGreen_3 gridItem paletteItem">#E5F3CF</div>
            </div>
          </div>

          <div className="colorPalette yellowTone pure-u-md-1-2 pure-u-lg-1-4">
            <img className="sampleImage pure-u-2-3" src={require("../img/sunflower.JPG")} alt="summer" />
            <div className="colors pure-u-1-3">
              <div className="myColorYellow_0 gridItem paletteItem">#AA6724</div>
              <div className="myColorYellow_1 gridItem paletteItem">#F2C242</div>
              <div className="myColorYellow_2 gridItem paletteItem">#F6F6F6</div>
              <div className="myColorYellow_3 gridItem paletteItem">#8FA845</div>
            </div>
          </div>

          <div className="colorPalette redTone pure-u-md-1-2 pure-u-lg-1-4">
            <img className="sampleImage pure-u-2-3" src={require("../img/momiji.JPG")} alt="autumn" />
            <div className="colors pure-u-1-3">
              <div className="myColorRed_0 gridItem paletteItem">#BB2F1E</div>
              <div className="myColorRed_1 gridItem paletteItem">#E3CB5E</div>
              <div className="myColorRed_2 gridItem paletteItem">#C8C781</div>
              <div className="myColorRed_3 gridItem paletteItem">#562B15</div>
            </div>
          </div>

          <div className="colorPalette blueTone pure-u-md-1-2 pure-u-lg-1-4">
            <img className="sampleImage pure-u-2-3" src={require("../img/snow.JPG")} alt="winter" />
            <div className="colors pure-u-1-3">
              <div className="myColorBlue_0 gridItem paletteItem">#28437B</div>
              <div className="myColorBlue_1 gridItem paletteItem">#4578D6</div>
              <div className="myColorBlue_2 gridItem paletteItem">#6B8CCE</div>
              <div className="myColorBlue_3 gridItem paletteItem">#92A8DB</div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
export default testGrid;
