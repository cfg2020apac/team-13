import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const heatMapData = {    
  positions: [
    {lat: 34.8637051, lng: -91.2745708},
    {lat: 22.381131, lng: 114.135572},
  ],
  options: {
    radius: 20,   
    opacity: 0.6,
  }
}

class Heatmap extends Component {
  static defaultProps = {
    center: {
      lat: 34.8637051,
      lng: -91.2745708
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          ref={(el) => this._googleMap = el}
          bootstrapURLKeys={process.env.GOOGLE_MAPS_API_KEY}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Heatmap;
