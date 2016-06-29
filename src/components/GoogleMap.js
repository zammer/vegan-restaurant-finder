import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
import ReactSpinner from 'react-spinjs';

export default ({ selectedRestaurant, region, selectRestaurant }) => {

  if(!selectedRestaurant.coordinate.latitude && !selectedRestaurant.coordinate.longitude) {
    return (<div style={{backgroundColor: '#ddd', height: "calc(100vh - 180px)", width: 'calc(50vw - 30px)', marginTop: '0.75rem'}}>
      <ReactSpinner />
    </div>)
  }
  return (
      <GoogleMapLoader
        containerElement={
          <div className="app-map-container" />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={14}
            center={{ lat: selectedRestaurant.coordinate.latitude, lng: selectedRestaurant.coordinate.longitude }}>
            {region.map((marker, index) => {
              let icon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
              if((selectedRestaurant.coordinate.latitude === marker.latitude) &&
              (selectedRestaurant.coordinate.longitude === marker.longitude)) {
                icon = 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
              }
            return (
              <Marker
                key={index}
                icon={icon}
                defaultAnimation={2}
                onClick={() => {
                  selectRestaurant(marker.id, { latitude: marker.latitude, longitude: marker.longitude })}}
                position={{lat: marker.latitude,lng: marker.longitude}}
                />
            );
          })}
          </GoogleMap>
        }
      />
  )
}
