"use client";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import SiteData from "@/data/siteData";
import DateArticle from "@/components/DateArticle";

const Dates = () => {
  const [mapKey, setMapKey] = useState(Date.now());
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    setMapKey(Date.now());
  }, []);

  return (
    <section id="dateSection">
      <h2>Prochains Concerts</h2>
      {SiteData.dates.map((date, index) => (
        <DateArticle key={index} date={date} />
      ))}
      <MapContainer
        key={mapKey}
        center={[46.456318611683315, -0.793449510859038]}
        zoom={9}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreemap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {markers.map((marker, index) => {
          return (
            <Marker key={index} position={marker.geocode} icon={monumentIcon}>
              <Popup>
                <Link to={`/sites/${marker.id}`}>{marker.popUp}</Link>
              </Popup>
            </Marker>
          );
        })} */}
      </MapContainer>
    </section>
  );
};

export default Dates;
