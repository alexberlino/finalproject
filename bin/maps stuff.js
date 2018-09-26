<InfoWindow
  marker={this.state.activeMarker}
  visible={this.state.showingInfoWindow}
/>

return (
  <Map
    item
    xs={12}
    style={style}
    // google={this.props.google}
    // onClick={this.onMapClick}
    zoom={14}
    initialCenter={{ lat: 52.48874402, lng: 13.44125056 }}
  />
);


initialCenter={{ lat: 52.48874402, lng: 13.44125056 }}
