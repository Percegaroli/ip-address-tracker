import React, { useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';

interface Props {
  lat: number;
  long: number;
}

const MapMarker = (props: Props) => {
  const { lat, long } = props;
  const map = useMap();

  useEffect(() => {
    map.flyTo({
      lat,
      lng: long,
    }, 13, { duration: 5 });
  }, []);

  const createIcon = () => new Icon({ iconUrl: '/icons/icon-location.svg', iconSize: [46, 56] });

  return (
    <Marker position={{ lat, lng: long }} icon={createIcon()} />
  );
};

export default MapMarker;
