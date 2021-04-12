// Import modules.
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

import { Listbox, ListboxOption } from "@reach/listbox";
import "@reach/listbox/styles.css";

// Import components.
import Header from "../../components/header.js";
import Activity from "../../components/activity.js";

// Import utilities.
import { getActivities } from "../../database/queryDatabase.js";

// Import styles.
import styles from "../../styles/pages/activities.module.css";

export default function Activities({ activities }) {
  // By default, show the user the activities for the first week.
  var currentWeek = 1;

  // If the URL contains a query for a specific week, show them the activities from that week instead of from the first week.
  const { query } = useRouter();
  if (query.week != undefined) {
    currentWeek = parseInt(query.week);
  }

  // We'll need to use the router to push the user around if they want to see the Activities in other weeks.
  const router = useRouter();

  // An array of objects, each one representing a time slot on the schedule.
  const timeSlots = [
    { timeSlotStart: 130, timeSlotEnd: 215 },
    { timeSlotStart: 215, timeSlotEnd: 345 },
    { timeSlotStart: 345, timeSlotEnd: 415 },
    { timeSlotStart: 415, timeSlotEnd: 545 },
    { timeSlotStart: 545, timeSlotEnd: 630 },
  ];

  return (
    <div>
      <Head>
        <title>Thursday Activities</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Render the header and navbar. */}
      <Header />
      {/* Render the title of the page and a brief description. */}
      <div className={styles.blurb}>
        <h1>THURSDAY ACTIVITIES</h1>
        <p>
          Click on any of the Activities below to be redirected to where they're
          meeting, which is usually on Zoom.
        </p>
      </div>
      {/* Render the button that links to the proposal form. */}
      <div style={{ textAlign: "center", margin: "1rem" }}>
        <Link href="https://forms.gle/wk73wx2cxbw5DaW3A">
          <a>
            <div className={styles.participate}>
              Want to produce an Activity? Submit a proposal here!
            </div>
          </a>
        </Link>
      </div>
      {/* Render the dropdown menu that contains every week of class in the semester. */}
      {/* Clicking on any of the options reloads the page with all of the Activities scheduled for that week. */}
      <div style={{ textAlign: "center", margin: "1rem" }}>
        Currently viewing activities for...
        <Listbox
          arrow={<div className={styles.arrow}>▼</div>}
          className={styles.week}
          value={currentWeek.toString()}
          onChange={(value) => {
            router.push(`/activities/?week=${value}`);
          }}
        >
          <ListboxOption className={styles.option} value="1">
            Week 1 - 1/28
          </ListboxOption>
          <ListboxOption className={styles.option} value="2">
            Week 2 - 2/4
          </ListboxOption>
          <ListboxOption className={styles.option} value="3">
            Week 3 - 2/11
          </ListboxOption>
          <ListboxOption className={styles.option} value="4">
            Week 4 - 2/18
          </ListboxOption>
          <ListboxOption className={styles.option} value="5">
            Week 5 - 2/25
          </ListboxOption>
          <ListboxOption className={styles.option} value="6">
            Week 6 - 3/4
          </ListboxOption>
          <ListboxOption className={styles.option} value="7">
            Week 7 - 3/11
          </ListboxOption>
          <ListboxOption className={styles.option} value="8">
            Week 8 - 3/18
          </ListboxOption>
          <ListboxOption className={styles.option} value="9">
            Week 9 - 3/25
          </ListboxOption>
          <ListboxOption className={styles.option} value="10">
            Week 10 - 4/1
          </ListboxOption>
          <ListboxOption className={styles.option} value="11">
            Week 11 - 4/8
          </ListboxOption>
          <ListboxOption className={styles.option} value="12">
            Week 12 - 4/15
          </ListboxOption>
          <ListboxOption className={styles.option} value="13">
            Week 13 - 4/22
          </ListboxOption>
          <ListboxOption className={styles.option} value="14">
            Week 14 - 4/29
          </ListboxOption>
          <ListboxOption className={styles.option} value="15">
            Week 15 - 5/6
          </ListboxOption>
        </Listbox>
      </div>

      {/* Render this week's agenda. */}
      <table className={styles.table}>
        {
          // Loop through every time slot in the timeSlots array...
          // Each iteration, render a table row with two table cells.
          timeSlots.map((value) => {
            return (
              <tr className={styles.tr}>
                {/* In this table cell, render the start and end time of this time slot. */}
                <td className={styles.td}>
                  <div className={styles.time}>
                    {
                      // prettier-ignore
                      [String(value.timeSlotStart).slice(0, 1), ":", String(value.timeSlotStart).slice(1),].join("")
                    + " PM"
                    }
                    <br />-<br />
                    {
                      // prettier-ignore
                      [String(value.timeSlotEnd).slice(0, 1), ":", String(value.timeSlotEnd).slice(1)].join("")
                    
                    + " PM"
                    }
                  </div>
                </td>
                {/* In this table cell, render all activities that are scheduled for this time slot. */}
                <td className={styles.td}>
                  <ul className={styles.ul}>
                    {
                      // Loop through every activity in the database.
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
                          const timeSlotStart = value.timeSlotStart;
                          const timeSlotEnd = value.timeSlotEnd;
                          // Attempt to render the activity.
                          return renderActivity({
                            id,
                            name,
                            description,
                            timeStart,
                            timeEnd,
                            week,
                            producers,
                            faculty,
                            link,
                            currentWeek,
                            timeSlotStart,
                            timeSlotEnd,
                            activities,
                          });
                        }
                      )
                    }
                  </ul>
                </td>
              </tr>
            );
          })
        }
      </table>
    </div>
  );
}

export async function getServerSideProps() {
  const activities = await getActivities();
  return { props: { activities: activities } };
}

function isActivityScheduledForNow({
  timeStart,
  timeEnd,
  week,
  currentWeek,
  timeSlotStart,
  timeSlotEnd,
}) {
  // Get an array of every five (5) minutes the activity is scheduled for.
  // If an activity lasts from 1:30 PM to 2:00 PM, we should get an array of [130, 135, 140, 145, 150, 155, 200].
  var activityTimeRange = [];
  var i = 0;

  do {
    activityTimeRange.push(timeStart + i);
    i += 5;

    // We're working with hours and minutes here, so instead of recording (for instance) 165, we'll jump to the next hour and record 200.
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

  // If the array includes times that the time slot we're currently looking to fill starts and ends with.
  if (
    (activityTimeRange.includes(timeSlotStart + 5) && week == currentWeek) ||
    (activityTimeRange.includes(timeSlotEnd - 5) && week == currentWeek)
  ) {
    return true;
  } else {
    return false;
  }
}

// Expects all information related to an activity, usually pulled from from the database.
// Returns an <Activity /> with appropriate styles.
function renderActivity({
  id,
  name,
  description,
  timeStart,
  timeEnd,
  week,
  producers,
  faculty,
  link,
  currentWeek,
  timeSlotStart,
  timeSlotEnd,
  activities,
}) {
  // Check to see if the activity currently attempting to be rendered is scheduled for the given time slot.
  // If it isn't, fail.
  if (
    isActivityScheduledForNow({
      timeStart,
      timeEnd,
      week,
      currentWeek,
      timeSlotStart,
      timeSlotEnd,
    }) == true
  ) {
    // Next, we'll try and dynamically style the activity's max-width based on how many other activities in the time slot there are.

    var numberOfActivitiesScheduledForNow = 0;

    // Loop through the array of all activities pulled from the database.
    activities.map(({ timeStart, timeEnd, week }) => {
      // Keep count of every activity scheduled for the given time slot.
      if (
        isActivityScheduledForNow({
          timeStart,
          timeEnd,
          week,
          currentWeek,
          timeSlotStart,
          timeSlotEnd,
        }) == true
      ) {
        numberOfActivitiesScheduledForNow += 1;
      }
    });

    return (
      <Activity
        style={{
          maxWidth: `${100 / numberOfActivitiesScheduledForNow - 5}%`,
        }}
        key={id}
        name={name}
        description={description}
        timeStart={timeStart}
        timeEnd={timeEnd}
        producers={producers}
        faculty={faculty}
        link={link}
      />
    );
  }
}
