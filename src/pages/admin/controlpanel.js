import { Field, Form, Formik } from "formik";

import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/layout/layout.js";
import Activity from "../../../components/activity/activity.js";

import styles from "../../../styles/controlPanel.module.css";

export default function controlPanel() {
  const queryDatabase = (values) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("/api/postActivity", options);
  };

  const initialValues = {
    name: "",
    description: "",
    timeStart: 130,
    timeEnd: 630,
    week: 1,
    producers: "",
    faculty: "Nita Sturiale",
    link: "",
  };

  return (
    <Layout>
      <Head>
        <title>Control Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className={styles.heading}>
          <a>Upload a new Activity to the database.</a>
        </h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            queryDatabase(values);
            alert(
              `Congratulations, you have sent a query to the database!\n\nWait a few minutes and then check to make sure the Activity has been uploaded properly. If it hasn't, contact Anthony.`
            );
            //resetForm();
          }}
          validate={(values) => {
            const errors = {};

            if (values.name == "") {
              errors.name = "Required.";
            }
            // if (values.name.includes("'")) {
            //   errors.name = "Don't use the ' character.";
            // }

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
          {({ values, errors }) => (
            <Form>
              <label htmlFor="name" style={{ padding: "0.5em" }}>
                What is the name of the Activity?
              </label>
              <Field name="name" as={"input"}></Field>
              {errors.name ? (
                <div className={styles.error}>
                  <a>{errors.name}</a>
                </div>
              ) : null}
              <br />
              <br />
              <label htmlFor="description" style={{ padding: "0.5em" }}>
                What is the description of the Activity?
              </label>
              <Field name="description" as={"input"}></Field>
              {errors.description ? (
                <div className={styles.error}>
                  <a>{errors.description}</a>
                </div>
              ) : null}
              <br />
              <br />
              <label htmlFor="timeStart" style={{ padding: "0.5em" }}>
                When does the Activity start?
              </label>
              <Field name="timeStart" as={"select"} className={styles.select}>
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
              <br />
              <br />
              <label htmlFor="timeEnd" style={{ padding: "0.5em" }}>
                When does the Activity end?
              </label>
              <Field name="timeEnd" as={"select"} className={styles.select}>
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
              <br />
              <br />
              <label htmlFor="week" style={{ padding: "0.5em" }}>
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
              <br />
              <br />
              <label htmlFor="producers" style={{ padding: "0.5em" }}>
                Who is producing the Activity?
              </label>
              <Field name="producers" as={"input"}></Field>
              {errors.producers ? (
                <div className={styles.error}>
                  <a>{errors.producers}</a>
                </div>
              ) : null}
              <br />
              <br />
              <label htmlFor="faculty" style={{ padding: "0.5em" }}>
                What faculty will be hosting the Activity?
              </label>
              <Field name="faculty" as={"select"} className={styles.select}>
                <option value="Nita Sturiale">Nita Sturiale</option>
                <option value="Elaine Buckholtz">Elaine Buckholtz</option>
                <option value="Dana Moser">Dana Moser</option>
                <option value="Juan Obando">Juan Obando</option>
                <option value="None">None</option>
              </Field>
              {errors.faculty ? (
                <div className={styles.error}>
                  <a>{errors.link}</a>
                </div>
              ) : null}
              <br />
              <br />
              <label htmlFor="link" style={{ padding: "0.5em" }}>
                Submit a link to the Activity (Usually this will just the Zoom).
              </label>
              <Field name="link" as={"input"}></Field>
              {errors.link ? (
                <div className={styles.error}>
                  <a>{errors.link}</a>
                </div>
              ) : null}
              <br />
              <br />
              <h3 className={styles.heading}>
                <a>YOUR ACTIVITY WILL LOOK LIKE THIS:</a>
              </h3>
              <ul style={{ listStyle: "none" }}>
                <Activity
                  style={{ maxWidth: "20em", margin: "auto" }}
                  name={values.name}
                  description={values.description}
                  timeStart={values.timeStart}
                  timeEnd={values.timeEnd}
                  producers={values.producers}
                  faculty={values.faculty}
                  link={values.link}
                />
              </ul>
              <br />
              <br />
              <button className={styles.button} type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
