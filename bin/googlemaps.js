import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import React from "react";

export class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick(props, marker) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick() {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = { width: "80vw", height: "80vh" };

    if (!this.props.loaded) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={5}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          onMapClick={this.onMapClick}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onInfoWindowClose}
          >
            <div>
              <h1>
                {this.state.selectedPlace && this.state.selectedPlace.name}
              </h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAZFK84TUoLkJYarmwvAWB2sCv0i87lVgQ"
})(GoogleMapsContainer);
