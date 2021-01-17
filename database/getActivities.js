import { openDB } from "../src/openDB";

export async function getActivities() {
  const db = await openDB();
  const activities = await db.all(`select * from activities`);
  return activities;
}
