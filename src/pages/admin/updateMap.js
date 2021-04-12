import { Field, Form, Formik } from "formik";

import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import Header from "../../../components/admin/header.js";

import { getMarkers } from "../../../database/queryDatabase.js";

import styles from "../../../styles/pages/admin/updateMap.module.css";

export default function updateMap({ markers }) {
  // This function will return different pages based on what action the user wishes to preform;
  // Either inserting a new Marker to the database or updating an already existing one.

  // By default, assume the user wants to insert a new Marker into the database.
  var action = "insert";

  // If the URL contains a query for a specific action, overwrite the previous action variable.
  const { query } = useRouter();
  if (query.action != undefined) {
    action = query.action;
  }

  // We'll use this to, well, query the database.
  const queryDatabase = (values) => {
    console.log(values);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values), // The body requires the user to specify what action they wish to preform, what table they want to do it to, and whatever values they're preforming it with.
    };
    fetch("../api/updateDatabase", options);
  };

  // We'll need to use the router to push the user around.
  const router = useRouter();

  // Based on whatever the action the user wishes to preform, display the appropriate page.
  switch (action) {
    case "insert":
      //  Define the initial values for the form.
      var initialValues = {
        name: "",
        massart_id: "",
        role: "student",
        latitude: 0,
        longitude: 0,
      };

      return (
        <div>
          <Head>
            <title>Insert a Marker</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Render the header and navbar. */}
          <Header />

          {/* Render the title of the page and a brief description. */}
          <div className={styles.blurb}>
            <h1>Insert a new Marker onto the map.</h1>
          </div>

          {/* Render the form for querying the database. */}
          <div className={styles.interface}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // Specify what action the user wishes to preform and what table they want to do it to.
                values.action = "insert";
                values.table = "markers";

                // Convert latitude and longitude to floats.
                values.latitude = parseFloat(values.latitude);
                values.longitude = parseFloat(values.longitude);

                // If they input a value above 85 or below -85, the Marker will try to render off the map and corrupt the page.
                if (values.latitude > 85) {
                  values.latitude = 85;
                }
                if (values.longitude > 85) {
                  values.longitude = 85;
                }
                if (values.latitude < -85) {
                  values.latitude = -85;
                }
                if (values.longitude < -85) {
                  values.longitude = -85;
                }

                // When the user submits the form, query the database and alert the user that they were successful.
                queryDatabase(values);
                alert(
                  `Congratulations, you have sent a query to the database!\n\nIt may take a few minutes for the website to update. If it doesn't after a while, contact Anthony.`
                );
              }}
              validate={(values) => {
                // If the user leaves any field on the form blank, throw and error and inform the user that they are required.
                const errors = {};
                if (values.name == "") {
                  errors.name = "Required.";
                }
                if (values.massart_id == "") {
                  errors.massart_id = "Required.";
                }
                if (values.role == "") {
                  errors.role = "Required.";
                }
                if (values.latitude == "") {
                  errors.latitude = "Required.";
                }
                if (isNaN(parseFloat(values.latitude))) {
                  errors.latitude = "Must be a number.";
                }
                if (values.longitude == "") {
                  errors.longitude = "Required.";
                }
                if (isNaN(parseFloat(values.longitude))) {
                  errors.longitude = "Must be a number.";
                }
                return errors;
              }}
            >
              {({ values, errors, handleSubmit }) => (
                <Form>
                  {/* Ask for the name of the individual this Marker is representing. */}
                  <div className={styles.field}>
                    <label htmlFor="name">
                      What is the name of the individual this Marker is
                      representing?
                    </label>
                    <Field name="name" as={"textarea"}></Field>
                    {errors.name ? (
                      <div className={styles.error}>
                        <a>{errors.name}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their Studio for Interrelated Media ID. */}
                  <div className={styles.field}>
                    <label htmlFor="massart_id">
                      What is their Studio for Interrelated Media ID (Usually,
                      this will be the first letter of their first name followed
                      by their full last name)?
                    </label>
                    <Field name="massart_id" as={"textarea"}></Field>
                    {errors.massart_id ? (
                      <div className={styles.error}>
                        <a>{errors.massart_id}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their role. */}
                  <div className={styles.field}>
                    <label htmlFor="role">What is their role?</label>
                    <Field name="role" as={"select"} className={styles.select}>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                    </Field>
                    {errors.role ? (
                      <div className={styles.error}>
                        <a>{errors.role}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their latitude. */}
                  <div className={styles.field}>
                    <label htmlFor="latitude">What is their latitude?</label>
                    <Field name="latitude" as={"textarea"}></Field>
                    {errors.latitude ? (
                      <div className={styles.error}>
                        <a>{errors.latitude}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their longitude. */}
                  <div className={styles.field}>
                    <label htmlFor="longitude">What is their longitude?</label>
                    <Field name="longitude" as={"textarea"}></Field>
                    {errors.longitude ? (
                      <div className={styles.error}>
                        <a>{errors.longitude}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Render what the Marker will look like once submitted. */}
                  <div className={styles.preview}>
                    <h3>Your Marker will look like this:</h3>
                    <div style={{ margin: "1rem" }}>
                      <div className={styles.popup}>
                        <Link
                          target="_new"
                          href={`https://inside.massartsim.org/profile/${values.massart_id}`}
                        >
                          <a>
                            <div>
                              <img
                                src={`https://inside.massartsim.org/data/photos/official/${values.massart_id}.jpg`}
                              />
                            </div>
                            <h3>{values.name}</h3>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Render the submit button. */}
                  <div style={{ textAlign: "center", margin: "1rem" }}>
                    <div className={styles.submit} onClick={handleSubmit}>
                      Submit
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      );
      break;
    case "update":
      // By default, assume the user wants to update the first Marker in the database.
      var entryId = 1;

      // If the URL contains a query for a specific Marker, overwrite the previous entryId variable.
      if (query.id != undefined) {
        entryId = parseInt(query.id);
      }

      //  Define the initial values of the form as the values of the entry as found in the database.
      var initialValues = {};
      markers.map(({ id, name, massart_id, role, latitude, longitude }) => {
        if (id == entryId) {
          initialValues = {
            id: id,
            name: name,
            massart_id: massart_id,
            role: role,
            latitude: latitude,
            longitude: longitude,
          };
        }
      });

      return (
        <div>
          <Head>
            <title>Update a Marker</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Render the header and navbar. */}
          <Header />

          {/* Render the title of the page and a brief description. */}
          <div className={styles.blurb}>
            <h1>Update a Marker on the map.</h1>
          </div>

          {/* Render the form for querying the database. */}
          <div className={styles.interface}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // Specify what action the user wishes to preform, what table they want to do it to, and what Marker they want to do it to.
                values.id = entryId;
                values.action = "update";
                values.table = "markers";

                // Convert latitude and longitude to floats.
                values.latitude = parseFloat(values.latitude);
                values.longitude = parseFloat(values.longitude);

                // If they input a value above 85 or below -85, the Marker will try to render off the map and corrupt the page.
                if (values.latitude > 85) {
                  values.latitude = 85;
                }
                if (values.longitude > 85) {
                  values.longitude = 85;
                }
                if (values.latitude < -85) {
                  values.latitude = -85;
                }
                if (values.longitude < -85) {
                  values.longitude = -85;
                }

                // When the user submits the form, query the database and alert the user that they were successful.
                queryDatabase(values);
                alert(
                  `Congratulations, you have sent a query to the database!\n\nIt may take a few minutes for the website to update. If it doesn't after a while, contact Anthony.`
                );
              }}
              validate={(values) => {
                // If the user leaves any field on the form blank, throw and error and inform the user that they are required.
                const errors = {};
                if (values.name == "") {
                  errors.name = "Required.";
                }
                if (values.massart_id == "") {
                  errors.massart_id = "Required.";
                }
                if (values.role == "") {
                  errors.role = "Required.";
                }
                if (values.latitude == "") {
                  errors.latitude = "Required.";
                }
                if (isNaN(parseFloat(values.latitude))) {
                  errors.latitude = "Must be a number.";
                }
                if (values.longitude == "") {
                  errors.longitude = "Required.";
                }
                if (isNaN(parseFloat(values.longitude))) {
                  errors.longitude = "Must be a number.";
                }
                return errors;
              }}
            >
              {({ values, errors, handleSubmit }) => (
                <Form>
                  {/* Ask for the name of the individual this Marker is representing. */}
                  <div className={styles.field}>
                    <label htmlFor="name">
                      What is the name of the individual this Marker is
                      representing?
                    </label>
                    <Field name="name" as={"textarea"}></Field>
                    {errors.name ? (
                      <div className={styles.error}>
                        <a>{errors.name}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their Studio for Interrelated Media ID. */}
                  <div className={styles.field}>
                    <label htmlFor="massart_id">
                      What is their Studio for Interrelated Media ID (Usually,
                      this will be the first letter of their first name followed
                      by their full last name)?
                    </label>
                    <Field name="massart_id" as={"textarea"}></Field>
                    {errors.massart_id ? (
                      <div className={styles.error}>
                        <a>{errors.massart_id}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their role. */}
                  <div className={styles.field}>
                    <label htmlFor="role">What is their role?</label>
                    <Field name="role" as={"select"} className={styles.select}>
                      <option value="student">Student</option>
                      <option value="faculty">Faculty</option>
                    </Field>
                    {errors.role ? (
                      <div className={styles.error}>
                        <a>{errors.role}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their latitude. */}
                  <div className={styles.field}>
                    <label htmlFor="latitude">What is their latitude?</label>
                    <Field name="latitude" as={"textarea"}></Field>
                    {errors.latitude ? (
                      <div className={styles.error}>
                        <a>{errors.latitude}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for their longitude. */}
                  <div className={styles.field}>
                    <label htmlFor="longitude">What is their longitude?</label>
                    <Field name="longitude" as={"textarea"}></Field>
                    {errors.longitude ? (
                      <div className={styles.error}>
                        <a>{errors.longitude}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Render what the Marker will look like once submitted. */}
                  <div className={styles.preview}>
                    <h3>Your Marker will look like this:</h3>
                    <div style={{ margin: "1rem" }}>
                      <div className={styles.popup}>
                        <Link
                          target="_new"
                          href={`https://inside.massartsim.org/profile/${values.massart_id}`}
                        >
                          <a>
                            <div>
                              <img
                                src={`https://inside.massartsim.org/data/photos/official/${values.massart_id}.jpg`}
                              />
                            </div>
                            <h3>{values.name}</h3>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Render the submit button. */}
                  <div style={{ textAlign: "center", margin: "1rem" }}>
                    <div className={styles.submit} onClick={handleSubmit}>
                      Submit
                    </div>
                  </div>
                </Form>
              )}
            </Formik>

            {/* Render the title of the section and a brief description. */}
            <div className={styles.blurb}>
              <h1>Delete a from the database.</h1>
            </div>
            {markers.map(
              ({ id, name, massart_id, role, latitude, longitude }) => {
                if (id == entryId) {
                  return (
                    <div style={{ margin: "1rem" }}>
                      <div className={styles.popup}>
                        <Link
                          target="_new"
                          href={`https://inside.massartsim.org/profile/${massart_id}`}
                        >
                          <a>
                            <div>
                              <img
                                src={`https://inside.massartsim.org/data/photos/official/${massart_id}.jpg`}
                              />
                            </div>
                            <h3>{name}</h3>
                          </a>
                        </Link>
                      </div>
                    </div>
                  );
                }
              }
            )}
            <div style={{ textAlign: "center", margin: "1rem" }}>
              <div
                className={styles.submit}
                type="submit"
                onClick={() => {
                  // Specify what action the user wishes to preform, what table they want to do it to, and what Marker they want to do it to.
                  var values = {
                    id: `${entryId}`,
                    action: "delete",
                    table: "markers",
                  };

                  // When the user submits the form, query the database and alert the user that they were successful.
                  queryDatabase(values);
                  alert(
                    `Congratulations, you have sent a query to the database!\n\nIt may take a few minutes for the website to update. If it doesn't after a while, contact Anthony.`
                  );

                  // The Marker can no longer be updated, push the user back onto the Map page.
                  router.push(`/admin/map/`);
                }}
              >
                Click here to delete the above Marker!
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
}

export async function getServerSideProps() {
  const markers = await getMarkers();
  return { props: { markers: markers } };
}
