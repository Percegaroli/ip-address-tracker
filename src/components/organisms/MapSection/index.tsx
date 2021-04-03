import React from 'react';
import {
  MapContainer, TileLayer,
} from 'react-leaflet';
import MapMarker from '../../atoms/MapMarker';
import styles from './styles.module.scss';

interface Props {
  locations: Array<Location>
}

interface Location {
  lat: number,
  long: number
}

const MapSection = (props: Props) => {
  const { locations } = props;
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom
      className={styles.MapContainer}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location) => (
        <MapMarker
          lat={location.lat}
          long={location.long}
        />
      ))}
    </MapContainer>
  );
};

export default MapSection;
