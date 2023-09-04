"use client";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import SiteData from "@/data/siteData";
import cities from "@/data/cities";
import DateArticle from "@/components/DateArticle";

const Dates = () => {
  const [mapKey, setMapKey] = useState(Date.now());
  const [markers, setMarkers] = useState([]);
  const [wantMap, setWantMap] = useState(false);

  const placeIcon = new Icon({
    iconUrl: require("../dates/place_Icon.png"),
    iconSize: [15, 30],
  });

  // Créez une fonction pour traiter les données et générer les marqueurs
  const generateMarkers = () => {
    const newMarkers = SiteData.dates.map((date) => {
      // Convertir le nom de la ville en majuscules
      const cityNameInUpperCase = date.city.toUpperCase();
      console.log(cityNameInUpperCase);
      // Trouver la ville correspondante dans cities en fonction du département et du nom de la ville
      const cityData = cities.find(
        (city) =>
          city.departmentCode === date.department &&
          city.commune === cityNameInUpperCase
      );
      if (cityData) {
        // Extraire les informations nécessaires de cityData
        const { commune, departmentCode, coords } = cityData;
        const [lat, lon] = coords.split(", ").map(Number);
        console.log(commune);
        // Créer l'objet de marqueur
        return {
          place: date.place,
          day: date.day,
          city: commune,
          department: departmentCode,
          geocode: [lat, lon],
        };
      } else {
        return null; // Retourner null si la ville n'est pas trouvée
      }
    });
    // Filtrer les marqueurs null (villes non trouvées)
    console.log(newMarkers);
    return newMarkers.filter((marker) => marker !== null);
  };

  useEffect(() => {
    if (wantMap) {
      // Mettre à jour les marqueurs lorsque les données changent
      const newMarkers = generateMarkers();
      setMarkers(newMarkers);
      setMapKey(Date.now());
    }
  }, [wantMap]);

  return (
    <section id="dateSection">
      <h2>Prochains Concerts</h2>
      {SiteData.dates.map((date, index) => (
        <DateArticle key={index} date={date} />
      ))}
      {SiteData.dates[0] && (
        <button id="mapToggler" onClick={() => setWantMap(!wantMap)}>
          {wantMap
            ? "ne plus afficher la carte"
            : "afficher les concerts sur une carte"}
        </button>
      )}
      {wantMap && (
        <MapContainer
          key={mapKey}
          center={[46.456318611683315, -0.793449510859038]}
          zoom={9}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreemap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => {
            return (
              <Marker key={index} position={marker.geocode} icon={placeIcon}>
                <Popup>
                  <p>
                    {marker.place}, le {marker.day}
                  </p>
                  <p>
                    {marker.city}({marker.department})
                  </p>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </section>
  );
};

export default Dates;
