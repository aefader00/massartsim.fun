// Import modules.
import Head from "next/head";

import Link from "next/link";

// Import components.
import Header from "../../components/header.js";

// Import functions and variables.

// Import styles.
import styles from "../../styles/pages/home.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={styles.blurb}>
        <div>
          <h1>WELCOME TO MASSARTSIM.FUN</h1>
          <p>
            This is a student-run website for everyone in the Studio of
            Interrelated Media department at Massachusetts College of Art and
            Design!
          </p>
          <p>
            Remote learning has really, really sucked. This app hopes to make it
            suck less, by offering some utilities for students that will
            hopefully makes the quarantine a little more tolerable.
          </p>
        </div>
        <div>
          <h2>Thursday Activities</h2>
          <p>
            With this tool, you can browse through every scheduled activity in
            the semester.
          </p>
          <p>
            You get to see a description of each activity, what time they're at,
            who's producing them, and what faculty will be hosting them.
            Clicking on the activities will redirect you to where they're
            meeting, which is usually on Zoom.
          </p>
          <p>
            If you want to produce an activity, you can click the button at the
            top of the page to be given the activity proposal form, with which
            you can, well, propose your activity.
          </p>
          <p>
            The faculty will then look over your proposal, and if it gets
            approved it'll be added to the schedule!
          </p>
        </div>
        <div>
          <h2>Collaboration Map</h2>
          <p>
            With this tool, you can check a map and see what students or faculty
            are near you, so you can meet up with them and collaborate in
            person. Just remember to wear a mask and socially distance!
          </p>
          <p>
            Everyone marked on this map has volunteered to be on it. If you'd
            like to be on the map, you can click the button at the top of the
            page to be given a form to fill out with your name and general
            location. You don't have to enter your exact address, since entering
            your neighborhood or even just your town is good enough for the map.
            Only give as much information as you feel comfortable with.
          </p>
        </div>
        <div>
          <h2>Discord Server</h2>
          <p>
            This will redirect you to the student-run Studio for Interrelated
            Media Discord Server! There, you'll be able to hang out with your
            friends talk about your day, school, and whatever else you want to.
          </p>
          <p>
            Discord is an instant messaging platform that's basically just Slack
            but better. It's completely free, you can run it entirely within
            your browser, and you don't need to make an account before entering
            servers. Just click on the link, and say hello!
          </p>
        </div>
      </div>
    </div>
  );
}
