import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import Head from "next/head";
import Link from "next/link";

import Layout from "../../components/layout/layout.js";

import styles from "../../styles/map.module.css";

import { getMarkers } from "../../database/getMarkers.js";

export default function Map({ markers }) {
  const token =
    "pk.eyJ1IjoiYWVmYWRlciIsImEiOiJja2syb2MwcDExMG4zMnBwZWs4NG9tZjkxIn0.uD5tNg6XC2NyOpNoVME49w";

  const [viewport, setViewport] = useState({
    latitude: 42.358167,
    longitude: -71.063694,
    width: "100%",
    height: "100%",
    zoom: 12,
  });

  const [selectedMarker, setMarker] = useState(null);

  return (
    <Layout>
      <Head>
        <title>Collaboration Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>
        <a>COLLABORATION MAP</a>
      </h1>
      <div>
        Click on any of the markers below to be shown a name and a face from the
        department.
        <br /> Click on the name to be taken to that individual's profile on the
        official Studio for Interrelated Media website.
      </div>
      <div style={{ margin: "0.75em" }}>
        <Link href="https://forms.gle/nA5iByDCmGa3RTVi9">
          <button className={styles.button}>
            <a>Want to be on this map? Fill out a request here!</a>
          </button>
        </Link>
      </div>
      <div
        style={{
          margin: "auto",
          borderRadius: "0.5em ",
          border: "0.5em solid #231f20",
          margin: "auto",
          width: "95%",
          height: "33em",
        }}
      >
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/aefader/ckk2qveri3pru17ljz8l8u67f"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
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
          {selectedMarker ? (
            <Popup
              latitude={selectedMarker.latitude}
              longitude={selectedMarker.longitude}
              closeOnClick={false}
              onClose={() => {
                setMarker(null);
              }}
            >
              <Link
                target="_new"
                href={`https://inside.massartsim.org/profile/${selectedMarker.massart_id}`}
              >
                <div className={styles.popupName}>
                  <img
                    style={{
                      padding: "0.5em",
                    }}
                    src={`https://inside.massartsim.org/data/photos/official/${selectedMarker.massart_id}.jpg`}
                  />
                  <br />
                  <a>{selectedMarker.name}</a>
                </div>
              </Link>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const markers = await getMarkers();
  return { props: { markers: markers } };
}
