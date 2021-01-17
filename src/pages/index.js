import Link from "next/link";
import Layout from "../../components/layout/layout.js";
import styles from "../../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.text}>
        <div>
          <h1 className={styles.heading}>
            <a>WELCOME TO MASSARTSIM.FUN</a>
          </h1>
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
        <br />
        <div>
          <h3 className={styles.headingLink}>
            <Link href="/activities">
              <a>Thursday Activities</a>
            </Link>
          </h3>
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
        <br />
        <div>
          <h3 className={styles.headingLink}>
            <Link href="/map">
              <a>Collaboration Map</a>
            </Link>
          </h3>
          <p>
            With this tool, you can check a map and see what students or faculty
            are near you, so you can meet up with them and collaborate in
            person. Just remember to wear a mask and socially distance!
          </p>
          <p>
            Everyone marked on this map has volunteered to be on it. If you'd
            like to be on the map, contact Anthony Fader at aefader@massart.edu
            and he will add you as soon as he can.
          </p>
        </div>
        <br />
        <div>
          <h3 className={styles.headingLink}>
            <Link href="https://discord.gg/NvrwEPa">
              <a>Discord Server</a>
            </Link>
          </h3>
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
        <div style={{ padding: "2em" }}></div>
      </div>
    </Layout>
  );
}
