// Import modules.
import Head from "next/head";

import Link from "next/link";

import React, { useState } from "react";

import ReactMapGL, { Marker, Popup } from "react-map-gl";

// Import components.
import Header from "../../../components/admin/header.js";

// Import functions and variables.
import { token } from "../../../mapboxToken.js";

import { getMarkers } from "../../../database/queryDatabase.js";

// Import styles.
import styles from "../../../styles/pages/admin/map.module.css";

export default function Map({ markers }) {
  // Define the viewport of the map.
  const [viewport, setViewport] = useState({
    latitude: 42.358167,
    longitude: -71.063694,
    width: "100%",
    height: "100%",
    zoom: 12,
  });

  // Reserve these variables for later.
  const [selectedMarker, setMarker] = useState(null);

  return (
    <div>
      <Head>
        <title>Collaboration Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Render the header and navbar. */}
      <Header />
      {/* Render the title of the page and a brief description. */}
      <div className={styles.blurb}>
        <h1>
          <a>COLLABORATION MAP</a>
        </h1>
        <p>
          Click on any of the Markers below to be shown a name and a face from
          the department. Click on the popup to edit/delete the Marker.
        </p>
      </div>
      {/* Render the button that links to the editing interface with the appropriate query. */}
      <div style={{ textAlign: "center", margin: "1rem" }}>
        <Link href="/admin/updateMap?action=insert">
          <a>
            <div className={styles.participate}>
              Click here to insert a Marker.
            </div>
          </a>
        </Link>
      </div>
      {/* Render the map. */}
      <div className={styles.map}>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/aefader/ckk2qveri3pru17ljz8l8u67f"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {/* Loop through every marker in the database, placing them down on the map. */}
          {markers.map(
            ({ id, name, massart_id, role, latitude, longitude }) => {
              return (
                <Marker
                  key={id}
                  massart_id={massart_id}
                  role={role}
                  latitude={latitude}
                  longitude={longitude}
                  offsetLeft={-25}
                  offsetTop={5}
                >
                  <button
                    className={styles.marker}
                    onClick={(event) => {
                      event.preventDefault();
                      setMarker({
                        id,
                        name,
                        massart_id,
                        role,
                        latitude,
                        longitude,
                      });
                    }}
                  >
                    {/* Render a black marker if the person it represents is a student. */}
                    {/* Else, if it's a member of the faculty, render a white marker. */}
                    <img
                      src={
                        role == "student"
                          ? "/map/marker-black.png"
                          : "/map/marker-white.png"
                      }
                    />
                  </button>
                </Marker>
              );
            }
          )}
          {/* If the user clicks on a marker, render a popup displaying a picture of the person it represents alongside their name.*/}
          {/* Clicking anywhere on the popup should link to the editing interface with the appropriate queries. */}
          {selectedMarker ? (
            <Popup
              className={styles.popup}
              latitude={selectedMarker.latitude}
              longitude={selectedMarker.longitude}
              closeOnClick={false}
              onClose={() => {
                setMarker(null);
              }}
            >
              <Link
                target="_new"
                href={`/admin/updateMap/?action=update&id=${selectedMarker.id}`}
              >
                <a>
                  <div>
                    <img
                      src={`https://inside.massartsim.org/data/photos/official/${selectedMarker.massart_id}.jpg`}
                    />
                    <h3>{selectedMarker.name}</h3>
                  </div>
                </a>
              </Link>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const markers = await getMarkers();
  return { props: { markers: markers } };
}
