import { openDatabase } from "../src/openDatabase";

export async function getActivities() {
  const database = await openDatabase();
  const activities = await database.all(`select * from activities`);
  return activities;
}

export async function getMarkers() {
  const database = await openDatabase();
  const markers = await database.all(`select * from markers`);
  return markers;
}
