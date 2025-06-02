import React, { Component, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import campusMap from './img/campus_map.jpg';
import { Marker, Location } from "./marker"; 


type AppProps = {};  // no props

type AppState = {
  markers: Array<Marker>;
  selected?: number; 
  newLocation?: Location;
};

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {markers: [
        // PUT MARKERS HERE!
        {name: "TestMarker", color: "red", location: {x: 50.4, y: 26}, size: "15px"},
      ]};
  }


  render = (): React.JSX.Element => {
    console.log(campusMap);
    return <div>
      <div id="headerbar">
        <h2 id="header">Find Food!</h2>
      </div>
        <div style={{ position: 'relative', width: '100vw' }}>
          <img style={{ width: '70%', display: 'block'}} src={campusMap} alt="Campus map with plant markers" />

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
    </div>;
  };

  doMarkerClick = (marker: Marker): void => {
    console.log(marker.name);
    let index: number = 0;
    for (const mark of this.state.markers) {
      if (mark.name === marker.name) {
        const markers: Array<Marker> = this.state.markers;
        markers[index] = {name: mark.name, color: "white", location: {x: 50.4, y: 26}, size: "20px"};
        this.setState({markers: markers});
      }
      index += 1;
    }
  }

}

