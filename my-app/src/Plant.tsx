import React, { ChangeEvent, Component } from 'react';
import { Location, Marker } from './marker';
import './Plant.css';

type EditorProps = {
  /** The marker that the user wants to view. */
  marker: Marker;
};

type EditorState = {
};


/** Component that allows the user to view a marker. */
export class Plant extends Component<EditorProps, EditorState> {
  constructor(props: EditorProps) {
    super(props);
  }

  render = (): React.JSX.Element => {
    
    return <div>
      <h1>{this.props.marker.name}</h1>
      <img id="img" src={this.props.marker.photo_path} alt="Plant" />
      <p>{this.props.marker.info}</p>
    </div>;
  };
}