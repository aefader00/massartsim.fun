import { openDB } from "../../openDB";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const db = await openDB();
    await db.run(
      `INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('${request.body.name.replace(
        /'/g,
        "’"
      )}', '${request.body.description.replace(/'/g, "’")}', ${
        request.body.timeStart
      }, ${request.body.timeEnd}, ${
        request.body.week
      }, '${request.body.producers.replace(
        /'/g,
        "’"
      )}', '${request.body.faculty.replace(
        /'/g,
        "’"
      )}', '${request.body.link.replace(/'/g, "’")}');`
    );
    response.end();
  }
}
