import { Field, Form, Formik } from "formik";

import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import Layout from "../../../components/layout/layout.js";
import styles from "../../../styles/activities.module.css";

import { getActivities } from "../../../database/getActivities.js";
import Activity from "../../../components/activity/activity.js";

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
        <a>ADMIN CONTROL PANEL</a>
      </h1>
      <br />
      <br />
      <h3 className={styles.heading}>
        <a>Thursday Activites</a>
      </h3>
      <div>
        Click on any of the activities below to edit and/or remove them.
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(value) => {
            router.push(`/admin/controlpanel/?week=${value.week}`);
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

      <div style={{ margin: "0.5em" }}>
        <Link href="/admin/activityinsert">
          <button className={styles.button}>
            <a>Insert an activity here!</a>
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
              1:30 PM <br />-<br /> 2:15 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
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
                    var activityTimeRange = [];
                    var i = 0;

                    do {
                      activityTimeRange.push(timeStart + i);
                      i += 5;
                      if (
                        timeStart + i == 160 ||
                        timeStart + i == 260 ||
                        timeStart + i == 360 ||
                        timeStart + i == 460 ||
                        timeStart + i == 560
                      ) {
                        i += 40;
                      }
                    } while (activityTimeRange.includes(timeEnd) != true);

                    if (
                      (activityTimeRange.includes(130 + 5) &&
                        week == weekView) ||
                      (activityTimeRange.includes(215 - 5) && week == weekView)
                    ) {
                      var numberOfActivites = 0;

                      // Loop through the found activities again to see how many other activities are in this time slot.
                      activities.map(({ timeStart, timeEnd, week }) => {
                        var activityTimeRange = [];
                        var i = 0;

                        do {
                          activityTimeRange.push(timeStart + i);
                          i += 5;
                          if (
                            timeStart + i == 160 ||
                            timeStart + i == 260 ||
                            timeStart + i == 360 ||
                            timeStart + i == 460 ||
                            timeStart + i == 560
                          ) {
                            i += 40;
                          }
                        } while (activityTimeRange.includes(timeEnd) != true);

                        if (
                          (activityTimeRange.includes(130 + 5) &&
                            week == weekView) ||
                          (activityTimeRange.includes(215 - 5) &&
                            week == weekView)
                        ) {
                          numberOfActivites = numberOfActivites + 1;
                        }
                      });

                      return (
                        <Activity
                          style={{
                            maxWidth: `${100 / numberOfActivites - 5}%`,
                          }}
                          key={id}
                          name={name}
                          description={description}
                          timeStart={timeStart}
                          timeEnd={timeEnd}
                          producers={producers}
                          faculty={faculty}
                          link={`/admin/activityupdate/?id=${id}`}
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
              2:15 PM <br />-<br /> 3:45 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
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
                    var activityTimeRange = [];
                    var i = 0;

                    do {
                      activityTimeRange.push(timeStart + i);
                      i += 5;
                      if (
                        timeStart + i == 160 ||
                        timeStart + i == 260 ||
                        timeStart + i == 360 ||
                        timeStart + i == 460 ||
                        timeStart + i == 560
                      ) {
                        i += 40;
                      }
                    } while (activityTimeRange.includes(timeEnd) != true);

                    if (
                      (activityTimeRange.includes(215 + 5) &&
                        week == weekView) ||
                      (activityTimeRange.includes(345 - 5) && week == weekView)
                    ) {
                      var numberOfActivites = 0;

                      // Loop through the found activities again to see how many other activities are in this time slot.
                      activities.map(({ timeStart, timeEnd, week }) => {
                        var activityTimeRange = [];
                        var i = 0;

                        do {
                          activityTimeRange.push(timeStart + i);
                          i += 5;
                          if (
                            timeStart + i == 160 ||
                            timeStart + i == 260 ||
                            timeStart + i == 360 ||
                            timeStart + i == 460 ||
                            timeStart + i == 560
                          ) {
                            i += 40;
                          }
                        } while (activityTimeRange.includes(timeEnd) != true);

                        if (
                          (activityTimeRange.includes(215 + 5) &&
                            week == weekView) ||
                          (activityTimeRange.includes(345 - 5) &&
                            week == weekView)
                        ) {
                          numberOfActivites = numberOfActivites + 1;
                        }
                      });
                      return (
                        <Activity
                          style={{
                            maxWidth: `${100 / numberOfActivites - 5}%`,
                          }}
                          key={id}
                          name={name}
                          description={description}
                          timeStart={timeStart}
                          timeEnd={timeEnd}
                          producers={producers}
                          faculty={faculty}
                          link={`/admin/activityupdate/?id=${id}`}
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
              3:45 PM <br />-<br /> 4:15 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
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
                    var activityTimeRange = [];
                    var i = 0;

                    do {
                      activityTimeRange.push(timeStart + i);
                      i += 5;
                      if (
                        timeStart + i == 160 ||
                        timeStart + i == 260 ||
                        timeStart + i == 360 ||
                        timeStart + i == 460 ||
                        timeStart + i == 560
                      ) {
                        i += 40;
                      }
                    } while (activityTimeRange.includes(timeEnd) != true);

                    if (
                      (activityTimeRange.includes(345 + 5) &&
                        week == weekView) ||
                      (activityTimeRange.includes(415 - 5) && week == weekView)
                    ) {
                      var numberOfActivites = 0;

                      // Loop through the found activities again to see how many other activities are in this time slot.
                      activities.map(({ timeStart, timeEnd, week }) => {
                        var activityTimeRange = [];
                        var i = 0;

                        do {
                          activityTimeRange.push(timeStart + i);
                          i += 5;
                          if (
                            timeStart + i == 160 ||
                            timeStart + i == 260 ||
                            timeStart + i == 360 ||
                            timeStart + i == 460 ||
                            timeStart + i == 560
                          ) {
                            i += 40;
                          }
                        } while (activityTimeRange.includes(timeEnd) != true);

                        if (
                          (activityTimeRange.includes(345 + 5) &&
                            week == weekView) ||
                          (activityTimeRange.includes(415 - 5) &&
                            week == weekView)
                        ) {
                          numberOfActivites = numberOfActivites + 1;
                        }
                      });
                      return (
                        <Activity
                          style={{
                            maxWidth: `${100 / numberOfActivites - 5}%`,
                          }}
                          key={id}
                          name={name}
                          description={description}
                          timeStart={timeStart}
                          timeEnd={timeEnd}
                          producers={producers}
                          faculty={faculty}
                          link={`/admin/activityupdate/?id=${id}`}
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
              4:15 PM <br />-<br /> 5:45 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
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
                    var activityTimeRange = [];
                    var i = 0;

                    do {
                      activityTimeRange.push(timeStart + i);
                      i += 5;
                      if (
                        timeStart + i == 160 ||
                        timeStart + i == 260 ||
                        timeStart + i == 360 ||
                        timeStart + i == 460 ||
                        timeStart + i == 560
                      ) {
                        i += 40;
                      }
                    } while (activityTimeRange.includes(timeEnd) != true);

                    if (
                      (activityTimeRange.includes(415 + 5) &&
                        week == weekView) ||
                      (activityTimeRange.includes(545 - 5) && week == weekView)
                    ) {
                      var numberOfActivites = 0;

                      // Loop through the found activities again to see how many other activities are in this time slot.
                      activities.map(({ timeStart, timeEnd, week }) => {
                        var activityTimeRange = [];
                        var i = 0;

                        do {
                          activityTimeRange.push(timeStart + i);
                          i += 5;
                          if (
                            timeStart + i == 160 ||
                            timeStart + i == 260 ||
                            timeStart + i == 360 ||
                            timeStart + i == 460 ||
                            timeStart + i == 560
                          ) {
                            i += 40;
                          }
                        } while (activityTimeRange.includes(timeEnd) != true);

                        if (
                          (activityTimeRange.includes(415 + 5) &&
                            week == weekView) ||
                          (activityTimeRange.includes(545 - 5) &&
                            week == weekView)
                        ) {
                          numberOfActivites = numberOfActivites + 1;
                        }
                      });
                      return (
                        <Activity
                          style={{
                            maxWidth: `${100 / numberOfActivites - 5}%`,
                          }}
                          key={id}
                          name={name}
                          description={description}
                          timeStart={timeStart}
                          timeEnd={timeEnd}
                          producers={producers}
                          faculty={faculty}
                          link={`/admin/activityupdate/?id=${id}`}
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
              5:45 PM <br />-<br /> 6:30 PM
            </td>
            <td>
              <ul className={styles.grid}>
                {activities.map(
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
                    var activityTimeRange = [];
                    var i = 0;

                    do {
                      activityTimeRange.push(timeStart + i);
                      i += 5;
                      if (
                        timeStart + i == 160 ||
                        timeStart + i == 260 ||
                        timeStart + i == 360 ||
                        timeStart + i == 460 ||
                        timeStart + i == 560
                      ) {
                        i += 40;
                      }
                    } while (activityTimeRange.includes(timeEnd) != true);

                    if (
                      (activityTimeRange.includes(545 + 5) &&
                        week == weekView) ||
                      (activityTimeRange.includes(630 - 5) && week == weekView)
                    ) {
                      var numberOfActivites = 0;

                      // Loop through the found activities again to see how many other activities are in this time slot.
                      activities.map(({ timeStart, timeEnd, week }) => {
                        var activityTimeRange = [];
                        var i = 0;

                        do {
                          activityTimeRange.push(timeStart + i);
                          i += 5;
                          if (
                            timeStart + i == 160 ||
                            timeStart + i == 260 ||
                            timeStart + i == 360 ||
                            timeStart + i == 460 ||
                            timeStart + i == 560
                          ) {
                            i += 40;
                          }
                        } while (activityTimeRange.includes(timeEnd) != true);

                        if (
                          (activityTimeRange.includes(545 + 5) &&
                            week == weekView) ||
                          (activityTimeRange.includes(630 - 5) &&
                            week == weekView)
                        ) {
                          numberOfActivites = numberOfActivites + 1;
                        }
                      });
                      return (
                        <Activity
                          style={{
                            maxWidth: `${100 / numberOfActivites - 5}%`,
                          }}
                          key={id}
                          name={name}
                          description={description}
                          timeStart={timeStart}
                          timeEnd={timeEnd}
                          producers={producers}
                          faculty={faculty}
                          link={`/admin/activityupdate/?id=${id}`}
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
