import { Field, Form, Formik } from "formik";

import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import Header from "../../../components/admin/header.js";
import Activity from "../../../components/admin/activity.js";

import { getActivities } from "../../../database/queryDatabase.js";

import styles from "../../../styles/pages/admin/updateActivity.module.css";

export default function updateActivity({ activities }) {
  // This function will return different pages based on what action the user wishes to preform;
  // Either inserting a new Activity to the database or updating an already existing one.

  // By default, assume the user wants to insert a new Activity into the database.
  var action = "insert";

  // If the URL contains a query for a specific action, overwrite the previous action variable.
  const { query } = useRouter();
  if (query.action != undefined) {
    action = query.action;
  }

  // We'll use this to, well, query the database.
  const queryDatabase = (values) => {
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
        description: "",
        timeStart: 130,
        timeEnd: 630,
        week: 1,
        producers: "",
        faculty: "",
        link: "",
      };

      return (
        <div>
          <Head>
            <title>Insert an Activity</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Render the header and navbar. */}
          <Header />

          {/* Render the title of the page and a brief description. */}
          <div className={styles.blurb}>
            <h1>INSERT A NEW ACTIVITY INTO THE DATABASE</h1>
          </div>

          {/* Render the form for querying the database. */}
          <div className={styles.interface}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // Specify what action the user wishes to preform and what table they want to do it to.
                values.action = "insert";
                values.table = "activities";

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
                if (values.description == "") {
                  errors.description = "Required.";
                }
                if (values.timeStart == "") {
                  errors.timeStart = "Required.";
                }
                if (values.timeEnd == "") {
                  errors.timeEnd = "Required.";
                }
                if (values.week == "") {
                  errors.week = "Required.";
                }
                if (values.producers == "") {
                  errors.producers = "Required.";
                }
                if (values.faculty == "") {
                  errors.faculty = "Required.";
                }
                if (values.link == "") {
                  errors.link = "Required.";
                }
                return errors;
              }}
            >
              {({ values, errors, handleSubmit }) => (
                <Form>
                  {/* Ask for the name of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="name">
                      What is the name of the Activity?
                    </label>
                    <Field name="name" as={"textarea"}></Field>
                    {errors.name ? (
                      <div className={styles.error}>
                        <a>{errors.name}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the description of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="description">
                      What is the description of the Activity?
                    </label>
                    <Field name="description" as={"textarea"}></Field>
                    {errors.description ? (
                      <div className={styles.error}>
                        <a>{errors.description}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the time the Activity is scheduled to start. */}
                  <div className={styles.field}>
                    <label htmlFor="timeStart">
                      When does the Activity start?
                    </label>
                    <Field
                      name="timeStart"
                      as={"select"}
                      className={styles.select}
                    >
                      <option value="130">1:30 PM</option>
                      <option value="145">1:45 PM</option>
                      <option value="200">2:00 PM</option>
                      <option value="215">2:15 PM</option>
                      <option value="230">2:30 PM</option>
                      <option value="245">2:45 PM</option>
                      <option value="300">3:00 PM</option>
                      <option value="315">3:15 PM</option>
                      <option value="330">3:30 PM</option>
                      <option value="345">3:45 PM</option>
                      <option value="400">4:00 PM</option>
                      <option value="415">4:15 PM</option>
                      <option value="430">4:30 PM</option>
                      <option value="445">4:45 PM</option>
                      <option value="500">5:00 PM</option>
                      <option value="515">5:15 PM</option>
                      <option value="530">5:30 PM</option>
                      <option value="545">5:45 PM</option>
                      <option value="600">6:00 PM</option>
                      <option value="615">6:15 PM</option>
                      <option value="630">6:30 PM</option>
                    </Field>
                    {errors.timeStart ? (
                      <div className={styles.error}>
                        <a>{errors.timeStart}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the time the Activity is scheduled to end. */}
                  <div className={styles.field}>
                    <label htmlFor="timeEnd">When does the Activity end?</label>
                    <Field
                      name="timeEnd"
                      as={"select"}
                      className={styles.select}
                    >
                      <option value="130">1:30 PM</option>
                      <option value="145">1:45 PM</option>
                      <option value="200">2:00 PM</option>
                      <option value="215">2:15 PM</option>
                      <option value="230">2:30 PM</option>
                      <option value="245">2:45 PM</option>
                      <option value="300">3:00 PM</option>
                      <option value="315">3:15 PM</option>
                      <option value="330">3:30 PM</option>
                      <option value="345">3:45 PM</option>
                      <option value="400">4:00 PM</option>
                      <option value="415">4:15 PM</option>
                      <option value="430">4:30 PM</option>
                      <option value="445">4:45 PM</option>
                      <option value="500">5:00 PM</option>
                      <option value="515">5:15 PM</option>
                      <option value="530">5:30 PM</option>
                      <option value="545">5:45 PM</option>
                      <option value="600">6:00 PM</option>
                      <option value="615">6:15 PM</option>
                      <option value="630">6:30 PM</option>
                    </Field>
                    {errors.timeEnd ? (
                      <div className={styles.error}>
                        <a>{errors.timeEnd}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the week the Activity is scheduled for. */}
                  <div className={styles.field}>
                    <label htmlFor="week">
                      What week is the Activity being produced on?
                    </label>
                    <Field name="week" as={"select"} className={styles.select}>
                      <option value="1">Week 1 - 1/28</option>
                      <option value="2">Week 2 - 2/4</option>
                      <option value="3">Week 3 - 2/11</option>
                      <option value="4">Week 4 - 2/18</option>
                      <option value="5">Week 5 - 2/25</option>
                      <option value="6">Week 6 - 3/4</option>
                      <option value="7">Week 7 - 3/11</option>
                      <option value="8">Week 8 - 3/18</option>
                      <option value="9">Week 9 - 3/25</option>
                      <option value="10">Week 10 - 4/1</option>
                      <option value="11">Week 11 - 4/8</option>
                      <option value="12">Week 12 - 4/15</option>
                      <option value="13">Week 13 - 4/22</option>
                      <option value="14">Week 14 - 4/29</option>
                      <option value="15">Week 15 - 5/6</option>
                    </Field>
                    {errors.week ? (
                      <div className={styles.error}>
                        <a>{errors.week}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the producers of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="producers">
                      Who is producing the Activity?
                    </label>
                    <Field name="producers" as={"textarea"}></Field>
                    {errors.producers ? (
                      <div className={styles.error}>
                        <a>{errors.producers}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the faculty that will be present during the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="faculty">
                      What faculty will be hosting the Activity?
                    </label>
                    <Field name="faculty" as={"textarea"}></Field>
                    {errors.faculty ? (
                      <div className={styles.error}>
                        <a>{errors.link}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the link to the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="link">
                      Submit a link to the Activity (Usually this will just the
                      Zoom).
                    </label>
                    <Field name="link" as={"textarea"}></Field>
                    {errors.link ? (
                      <div className={styles.error}>
                        <a>{errors.link}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Render what the Activity will look like once submitted. */}
                  <div className={styles.preview}>
                    <h3>Your Activity will look like this:</h3>
                    <ul className={styles.ul}>
                      <Activity
                        style={{ width: "20rem", margin: "auto" }}
                        name={values.name}
                        description={values.description}
                        timeStart={values.timeStart}
                        timeEnd={values.timeEnd}
                        producers={values.producers}
                        faculty={values.faculty}
                        link={values.link}
                      />
                    </ul>
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
      // By default, assume the user wants to update the first Activity in the database.
      var entryId = 1;

      // If the URL contains a query for a specific Activity, overwrite the previous entryId variable.
      if (query.id != undefined) {
        entryId = parseInt(query.id);
      }

      //  Define the initial values of the form as the values of the entry as found in the database.
      var initialValues = {};
      activities.map(
        ({
          id,
          name,
          description,
          timeStart,
          timeEnd,
          week,
          producers,
          faculty,
          link,
        }) => {
          if (id == entryId) {
            initialValues = {
              name: name,
              description: description,
              timeStart: timeStart,
              timeEnd: timeEnd,
              week: week,
              producers: producers,
              faculty: faculty,
              link: link,
            };
          }
        }
      );

      return (
        <div>
          <Head>
            <title>Update an Activity</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* Render the header and navbar. */}
          <Header />

          {/* Render the title of the page and a brief description. */}
          <div className={styles.blurb}>
            <h1>UPDATE AN ACTIVITY IN THE DATABASE</h1>
          </div>

          {/* Render the form for querying the database. */}
          <div className={styles.interface}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                // Specify what action the user wishes to preform, what table they want to do it to, and what Activity they want to do it to.
                values.id = entryId;
                values.action = "update";
                values.table = "activities";

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
                if (values.description == "") {
                  errors.description = "Required.";
                }
                if (values.timeStart == "") {
                  errors.timeStart = "Required.";
                }
                if (values.timeEnd == "") {
                  errors.timeEnd = "Required.";
                }
                if (values.week == "") {
                  errors.week = "Required.";
                }
                if (values.producers == "") {
                  errors.producers = "Required.";
                }
                if (values.faculty == "") {
                  errors.faculty = "Required.";
                }
                if (values.link == "") {
                  errors.link = "Required.";
                }
                return errors;
              }}
            >
              {({ values, errors, handleSubmit }) => (
                <Form>
                  {/* Ask for the name of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="name">
                      What is the name of the Activity?
                    </label>
                    <Field name="name" as={"textarea"}></Field>
                    {errors.name ? (
                      <div className={styles.error}>
                        <a>{errors.name}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the description of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="description">
                      What is the description of the Activity?
                    </label>
                    <Field name="description" as={"textarea"}></Field>
                    {errors.description ? (
                      <div className={styles.error}>
                        <a>{errors.description}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the time the Activity is scheduled to start. */}
                  <div className={styles.field}>
                    <label htmlFor="timeStart">
                      When does the Activity start?
                    </label>
                    <Field
                      name="timeStart"
                      as={"select"}
                      className={styles.select}
                    >
                      <option value="130">1:30 PM</option>
                      <option value="145">1:45 PM</option>
                      <option value="200">2:00 PM</option>
                      <option value="215">2:15 PM</option>
                      <option value="230">2:30 PM</option>
                      <option value="245">2:45 PM</option>
                      <option value="300">3:00 PM</option>
                      <option value="315">3:15 PM</option>
                      <option value="330">3:30 PM</option>
                      <option value="345">3:45 PM</option>
                      <option value="400">4:00 PM</option>
                      <option value="415">4:15 PM</option>
                      <option value="430">4:30 PM</option>
                      <option value="445">4:45 PM</option>
                      <option value="500">5:00 PM</option>
                      <option value="515">5:15 PM</option>
                      <option value="530">5:30 PM</option>
                      <option value="545">5:45 PM</option>
                      <option value="600">6:00 PM</option>
                      <option value="615">6:15 PM</option>
                      <option value="630">6:30 PM</option>
                    </Field>
                    {errors.timeStart ? (
                      <div className={styles.error}>
                        <a>{errors.timeStart}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the time the Activity is scheduled to end. */}
                  <div className={styles.field}>
                    <label htmlFor="timeEnd">When does the Activity end?</label>
                    <Field
                      name="timeEnd"
                      as={"select"}
                      className={styles.select}
                    >
                      <option value="130">1:30 PM</option>
                      <option value="145">1:45 PM</option>
                      <option value="200">2:00 PM</option>
                      <option value="215">2:15 PM</option>
                      <option value="230">2:30 PM</option>
                      <option value="245">2:45 PM</option>
                      <option value="300">3:00 PM</option>
                      <option value="315">3:15 PM</option>
                      <option value="330">3:30 PM</option>
                      <option value="345">3:45 PM</option>
                      <option value="400">4:00 PM</option>
                      <option value="415">4:15 PM</option>
                      <option value="430">4:30 PM</option>
                      <option value="445">4:45 PM</option>
                      <option value="500">5:00 PM</option>
                      <option value="515">5:15 PM</option>
                      <option value="530">5:30 PM</option>
                      <option value="545">5:45 PM</option>
                      <option value="600">6:00 PM</option>
                      <option value="615">6:15 PM</option>
                      <option value="630">6:30 PM</option>
                    </Field>
                    {errors.timeEnd ? (
                      <div className={styles.error}>
                        <a>{errors.timeEnd}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the week the Activity is scheduled for. */}
                  <div className={styles.field}>
                    <label htmlFor="week">
                      What week is the Activity being produced on?
                    </label>
                    <Field name="week" as={"select"} className={styles.select}>
                      <option value="1">Week 1 - 1/28</option>
                      <option value="2">Week 2 - 2/4</option>
                      <option value="3">Week 3 - 2/11</option>
                      <option value="4">Week 4 - 2/18</option>
                      <option value="5">Week 5 - 2/25</option>
                      <option value="6">Week 6 - 3/4</option>
                      <option value="7">Week 7 - 3/11</option>
                      <option value="8">Week 8 - 3/18</option>
                      <option value="9">Week 9 - 3/25</option>
                      <option value="10">Week 10 - 4/1</option>
                      <option value="11">Week 11 - 4/8</option>
                      <option value="12">Week 12 - 4/15</option>
                      <option value="13">Week 13 - 4/22</option>
                      <option value="14">Week 14 - 4/29</option>
                      <option value="15">Week 15 - 5/6</option>
                    </Field>
                    {errors.week ? (
                      <div className={styles.error}>
                        <a>{errors.week}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the producers of the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="producers">
                      Who is producing the Activity?
                    </label>
                    <Field name="producers" as={"textarea"}></Field>
                    {errors.producers ? (
                      <div className={styles.error}>
                        <a>{errors.producers}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the faculty that will be present during the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="faculty">
                      What faculty will be hosting the Activity?
                    </label>
                    <Field name="faculty" as={"textarea"}></Field>
                    {errors.faculty ? (
                      <div className={styles.error}>
                        <a>{errors.link}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Ask for the link to the Activity. */}
                  <div className={styles.field}>
                    <label htmlFor="link">
                      Submit a link to the Activity (Usually this will just the
                      Zoom).
                    </label>
                    <Field name="link" as={"textarea"}></Field>
                    {errors.link ? (
                      <div className={styles.error}>
                        <a>{errors.link}</a>
                      </div>
                    ) : null}
                  </div>

                  {/* Render what the Activity will look like once submitted. */}
                  <div className={styles.preview}>
                    <h3>Your Activity will look like this:</h3>
                    <ul className={styles.ul}>
                      <Activity
                        style={{ width: "50%", margin: "auto" }}
                        name={values.name}
                        description={values.description}
                        timeStart={values.timeStart}
                        timeEnd={values.timeEnd}
                        producers={values.producers}
                        faculty={values.faculty}
                        link={values.link}
                      />
                    </ul>
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
              <h1>DELETE AN ACTIVITY IN THE DATABASE</h1>
            </div>
            {activities.map(
              ({
                id,
                name,
                description,
                timeStart,
                timeEnd,
                producers,
                faculty,
                link,
              }) => {
                if (id == entryId) {
                  return (
                    <ul className={styles.ul}>
                      <Activity
                        style={{ width: "50%", margin: "auto" }}
                        name={name}
                        description={description}
                        timeStart={timeStart}
                        timeEnd={timeEnd}
                        producers={producers}
                        faculty={faculty}
                        link={link}
                      />
                    </ul>
                  );
                }
              }
            )}
            <div style={{ textAlign: "center", margin: "1rem" }}>
              <div
                className={styles.submit}
                type="submit"
                onClick={() => {
                  // Specify what action the user wishes to preform, what table they want to do it to, and what Activity they want to do it to.
                  var values = {
                    id: `${entryId}`,
                    action: "delete",
                    table: "activities",
                  };

                  // When the user submits the form, query the database and alert the user that they were successful.
                  queryDatabase(values);
                  alert(
                    `Congratulations, you have sent a query to the database!\n\nIt may take a few minutes for the website to update. If it doesn't after a while, contact Anthony.`
                  );

                  // The Activity can no longer be updated, push the user back onto the Activities page.
                  router.push(`/admin/activities/`);
                }}
              >
                Click here to delete the above Activity!
              </div>
            </div>
          </div>
        </div>
      );
      break;
  }
}

export async function getServerSideProps() {
  const activities = await getActivities();
  return { props: { activities: activities } };
}
