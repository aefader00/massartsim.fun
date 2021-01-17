import { Field, Form, Formik } from "formik";

import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../components/layout/layout.js";
import styles from "../../styles/activities.module.css";

import { getActivities } from "../../database/getActivities";
import Activity from "../../components/activity/activity";

export default function Activities({ activities }) {
  const { query } = useRouter();

  const router = useRouter();

  var weekView = 1;
  if (query.week != undefined) {
    weekView = parseInt(query.week);
  }

  const initialValues = {
    password: query.password || "",
    week: query.week || "1",
  };

  return (
    <Layout>
      <Head>
        <title>Thursday Activities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>
        <a>THURSDAY ACTIVITIES</a>
      </h1>
      <div>
        Click on any of the activities below to be redirected to where they're
        meeting, which is usually on Zoom.
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(value) => {
            router.push(`/activities/?week=${value.week}`);
          }}
        >
          {() => (
            <Form>
              <label style={{ padding: "0.5em" }}>
                Currently viewing activities for...
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
              <div style={{ display: "inline" }}>
                <button className={styles.button} type="submit">
                  View
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div>
        <Link href="/activities">
          <button className={styles.button}>
            <a>Want to produce an activity? Submit a proposal here!</a>
          </button>
        </Link>
      </div>
      <div className={styles.table}>
        <table>
          <tr>
            <th className={styles.label}>
              <h3>Time</h3>
            </th>
            <th className={styles.label}>
              <h3>Activities</h3>
            </th>
          </tr>
          <tr>
            <td className={styles.timeslot}>
              1:30 PM <br />-<br /> 2:00 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
                  ({
                    name,
                    description,
                    time,
                    week,
                    producers,
                    faculty,
                    link,
                  }) => {
                    if (time == 130 && week == weekView) {
                      return (
                        <Activity
                          name={name}
                          description={description}
                          producers={producers}
                          faculty={faculty}
                          link={link}
                        />
                      );
                    }
                  }
                )}
              </ul>
            </td>
          </tr>
          <tr>
            <td className={styles.timeslot}>
              2:00 PM <br />-<br /> 3:30 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
                  ({
                    name,
                    description,
                    time,
                    week,
                    producers,
                    faculty,
                    link,
                  }) => {
                    if (time == 200 && week == weekView) {
                      return (
                        <Activity
                          style={{ maxWidth: "20em" }}
                          name={name}
                          description={description}
                          producers={producers}
                          faculty={faculty}
                          link={link}
                        />
                      );
                    }
                  }
                )}
              </ul>
            </td>
          </tr>
          <tr>
            <td className={styles.timeslot}>
              3:30 PM <br />-<br /> 4:00 PM
            </td>
            <td style={{ padding: "0.75em" }}>
              <h3>Screen Break</h3>
            </td>
          </tr>
          <tr>
            <td className={styles.timeslot}>
              4:00 PM <br />-<br /> 6:30 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
                  ({
                    name,
                    description,
                    time,
                    week,
                    producers,
                    faculty,
                    link,
                  }) => {
                    if (time == 400 && week == weekView) {
                      return (
                        <Activity
                          style={{ maxWidth: "20em" }}
                          name={name}
                          description={description}
                          producers={producers}
                          faculty={faculty}
                          link={link}
                        />
                      );
                    }
                  }
                )}
              </ul>
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const activities = await getActivities();
  return { props: { activities: activities } };
}
