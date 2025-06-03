import React, { Component } from 'react';
import './App.css';
import campusMap from './img/campus_map.jpeg';
import { Marker, MARKERS } from "./marker"; 
import {Plant} from "./Plant";
import {Sources} from "./Sources";

type Page = {kind: "home"} | {kind: "sources"};


type AppProps = {};  // no props

type AppState = {
  markers: Array<Marker>;
  selected: Marker | undefined;
  page: Page;
};

export class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {markers: MARKERS, selected: undefined, page: {kind: "home"}};
  }


  render = (): React.JSX.Element => {
    if (this.state.page.kind === "home") {
      let show: React.JSX.Element = <div></div>;
      if (!(typeof this.state.selected === "undefined")) {
        show = <Plant marker={this.state.selected}/>;
      } else {
        show = <div> 
            <h1>UW Plants!</h1> 
            <p id="text">Each dot represents a plant on UW campus that is edible. Click on each dot to learn more about the plant and how to eat it! </p>
          </div>
      }
      return <div>
        {this.renderHeader()};
        <div id="map">
          <img style={{width: "100%"}} src={campusMap} alt="Campus map with plant markers" />
          {this.renderMarkers()};
        </div>
        <div id="info">
          {show}
        </div>
      </div>;
    } else {
      return <div>
        {this.renderHeader()};
        <Sources/>
        </div>;
    }
  };

  renderMarkers = (): Array<React.JSX.Element> => {
    const elems: Array<React.JSX.Element> = [];
    for (const marker of this.state.markers) {
      elems.push(<div
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
      />)
    }
    return elems;
  };

  renderHeader = (): React.JSX.Element => {
    return <div id="headerbar"> 
      <button id="header" onClick={this.doHomeClick}>Edible Plants Around UW Campus</button> 
      <button id="sources" onClick={this.doSourcesClick}>Sources</button>
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

  doSourcesClick = (): void => {
    if (this.state.selected !== undefined) {
      let index = 0;
      let markers: Array<Marker> =this.state.markers;
      for (const mark of this.state.markers) {
        if (mark.name === this.state.selected.name) {
          markers[index].color = "red";
          markers[index].size = "20px";
        }
        index += 1;
      }
      this.setState({selected: undefined, page: {kind: "sources"},  markers: markers});
    } else {
      this.setState({page: {kind: "sources"}});
    }
  }

  doHomeClick = (): void => {
    this.setState({page: {kind: "home"}});
  }
}

