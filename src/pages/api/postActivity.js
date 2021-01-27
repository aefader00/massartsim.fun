import { openDB } from "../../openDB";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const db = await openDB();
    await db.run(
      `INSERT INTO Activities (name, description, timeStart, timeEnd, week, producers, faculty, link) values('${request.body.name}', '${request.body.description}', ${request.body.timeStart}, ${request.body.timeEnd}, ${request.body.week}, '${request.body.producers}', '${request.body.faculty}', '${request.body.link}');`
    );
    response.end();
  }
}
