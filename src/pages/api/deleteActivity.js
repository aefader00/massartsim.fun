import { openDB } from "../../openDB";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const db = await openDB();
    await db.run(`DELETE FROM Activities where id = ${request.body.id};`);
    response.end();
  }
}
