import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

function Globe({ data, map }) {
  const token =
    "pk.eyJ1Ijoic2ltYmFta2VueWEiLCJhIjoiY2wxN2Y2OW10MGI2ZTNjcDltdnh2aDc3NyJ9.Fw9-ISoHZ-7M4Pk_bo3aiw";
  mapboxgl.accessToken = token;
  const mapContainer = useRef(null);
  const [long, setLong] = useState(-74.5);
  const [lat, setLat] = useState(40);

  useEffect(() => {
    setLat(data.latitude);
    setLong(data.longitude);
    if (map.current) return;
    map.current = new mapboxgl.Map(
      {
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [long, lat],
        zoom: 4,
      },
      []
    );
  }, [long, lat]);

  return (
    <div>
      <div ref={mapContainer} id="map"></div>
    </div>
  );
}

export default Globe;
