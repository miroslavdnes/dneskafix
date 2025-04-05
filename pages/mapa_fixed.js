
import React, { useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

const events = [
  {
    title: 'FVLCRVM @ Pink Whale',
    latitude: 48.145,
    longitude: 17.107
  },
  {
    title: 'Indie Night v Novej Cvernovke',
    latitude: 48.162,
    longitude: 17.134
  },
  {
    title: 'Kávový festival na Miletičke',
    latitude: 48.153,
    longitude: 17.125
  },
  {
    title: 'Loft Party by Basshunters',
    latitude: 48.140,
    longitude: 17.109
  }
];

export default function Mapa() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      const mapboxgl = await import('mapbox-gl');
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtb3VzZXIiLCJhIjoiY2xrejUyZWduMDM5ZjNvcGFocjA5ZGF3ZCJ9.RsLDHVkDa6VYhCh6EyIJ2w';

      const map = new mapboxgl.Map({
        container: mapRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [17.12, 48.15],
        zoom: 12
      });

      events.forEach(event => {
        new mapboxgl.Marker()
          .setLngLat([event.longitude, event.latitude])
          .setPopup(new mapboxgl.Popup().setText(event.title))
          .addTo(map);
      });
    };

    loadMap();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial' }}>
      <h1 style={{ padding: '1rem', fontSize: '24px' }}>DNESKA – Mapa</h1>
      <div ref={mapRef} style={{ width: '100%', height: '85vh' }} />
    </div>
  );
}
