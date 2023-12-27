'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Map() {

  const containerStyle = {
    width: '100%',
    height: '581px'
  };
  
  const center = {
    lat: -29.769547,
    lng: -51.135386,
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCqSQ48jswhRpZWzAly2-beIumt60977KQ"
  });

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        onLoad={onLoad}
        zoom={10}
        onUnmount={onUnmount}
      >
    </GoogleMap>
  ) : <></>
}

export default React.memo(Map)