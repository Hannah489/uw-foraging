import React, { Component } from 'react';
import { Marker } from './marker';
import './Plant.css';

type EditorProps = {
  /** The marker that the user wants to view. */
  marker: Marker;
};

type EditorState = {
};


/** Component that allows the user to view a marker. */
export class Plant extends Component<EditorProps, EditorState> {
  render = (): React.JSX.Element => {
    
    return <div>
      <h1>{this.props.marker.name}</h1>
      <img id="img" src={this.props.marker.photo_path} alt="Plant" />
      <p id="text">{this.props.marker.info}</p>
    </div>;
  };
}