import { openDB } from "../../openDB";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const db = await openDB();
    await db.run(
      `UPDATE Activities set name = '${request.body.name.replace(
        /'/g,
        "’"
      )}', description = '${request.body.description.replace(
        /'/g,
        "’"
      )}', timeStart = ${request.body.timeStart}, timeEnd = ${
        request.body.timeEnd
      }, week = ${
        request.body.week
      }, producers = '${request.body.producers.replace(
        /'/g,
        "’"
      )}', faculty = '${request.body.faculty.replace(
        /'/g,
        "’"
      )}', link = '${request.body.link.replace(/'/g, "’")}' where id = ${
        request.body.id
      };`
    );
    response.end();
  }
}
