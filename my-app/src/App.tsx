import React, { Component, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import campusMap from './img/campus_map.jpeg';
import { Marker, Location, MARKERS } from "./marker"; 
import {Plant} from "./Plant";


type AppProps = {};  // no props

type AppState = {
  markers: Array<Marker>;
  selected: Marker | undefined; 
  newLocation?: Location;
};

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {markers: MARKERS, selected: undefined};
  }


  render = (): React.JSX.Element => {
    let show: React.JSX.Element = <div></div>;
    if (!(typeof this.state.selected === "undefined")) {
      show = <Plant marker={this.state.selected}/>;
    }
    return <div>
      <div id="headerbar">
        <h2 id="header">Edible Plants Around UW Campus</h2>
      </div>
      <div id="map">
        <img style={{width: "100%"}} src={campusMap} alt="Campus map with plant markers" />

        {this.state.markers.map((marker: Marker, index: number) => (
          <div
            key={index}
            className="marker"
            style={{ left: `${marker.location.x}%`,
              top: `${marker.location.y}%`,
              position: "absolute",
              width: marker.size,
              height: marker.size,
              backgroundColor: marker.color, 
              borderRadius: "50%",
              transform: "translate(-50%, -50%)", 
              cursor: "pointer", }}
            onClick={() => this.doMarkerClick(marker)}
          />
        ))}
      </div>
      <div id="info">
        {show}
      </div>
    </div>;
  };

  doMarkerClick = (marker: Marker): void => {
    let index: number = 0;
    let markers: Array<Marker> =this.state.markers;
    for (const mark of this.state.markers) {
      if (mark.name === marker.name) {
        markers[index].color = "green";
        markers[index].size = "30px";
      } else if (this.state.selected !== undefined && mark.name === this.state.selected.name) {
        markers[index].color = "red";
        markers[index].size = "20px";
      }
      index += 1;
    }
    this.setState({markers: markers, selected: marker});
  }

}

