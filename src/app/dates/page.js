"use client";
import React, { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import cities from "@/data/cities.json";
import DateArticle from "@/components/DateArticle";
import { useSiteDataContext } from "@/contexts/SiteDataContext";

const Dates = () => {
  const { siteData, updateSiteData } = useSiteDataContext();
  const [mapKey, setMapKey] = useState(Date.now());
  const [markers, setMarkers] = useState([]);
  const [wantMap, setWantMap] = useState(false);

  useEffect(() => {
    if (wantMap) {
      // Mettre à jour les marqueurs lorsque les données changent
      const newMarkers = generateMarkers();
      setMarkers(newMarkers);
      setMapKey(Date.now());
    }
  }, [wantMap]);

  // Créez une fonction pour traiter les données et générer les marqueurs
  const generateMarkers = () => {
    const newMarkers = siteData.dates.map((date) => {
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

  return (
    <section id="dateSection">
      <h2>Prochains Concerts</h2>
      {siteData.dates.map((date, index) => (
        <DateArticle key={index} date={date} />
      ))}
      {siteData.dates[0] && (
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
              <Marker key={index} position={marker.geocode}>
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
