import { openDB } from "../src/openDB";

export async function getMarkers() {
  const db = await openDB();
  const markers = await db.all(`select * from markers`);
  return markers;
}
