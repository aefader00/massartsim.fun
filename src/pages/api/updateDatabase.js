import { openDatabase } from "../../openDatabase";

export default async function handler(request, response) {
  const database = await openDatabase();
  if (request.method === "POST") {
    if (request.body.action == "insert") {
      switch (request.body.table) {
        case "activities":
          await database.run(
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
          break;
        case "markers":
          await database.run(
            `INSERT INTO Markers (name, massart_id, role, latitude, longitude) values('${request.body.name.replace(
              /'/g,
              "’"
            )}', '${request.body.massart_id.replace(
              /'/g,
              "’"
            )}', '${request.body.role.replace(/'/g, "’")}', ${
              request.body.latitude
            }, ${request.body.longitude});`
          );
          response.end();
          break;
      }
    }
    if (request.body.action == "update") {
      switch (request.body.table) {
        case "activities":
          await database.run(
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
          break;
        case "markers":
          await database.run(
            `UPDATE Markers set name = '${request.body.name.replace(
              /'/g,
              "’"
            )}', massart_id = '${request.body.massart_id.replace(
              /'/g,
              "’"
            )}', role = '${request.body.role.replace(/'/g, "’")}', latitude = ${
              request.body.latitude
            }, longitude = ${request.body.longitude} where id = ${
              request.body.id
            };`
          );
          response.end();
          break;
      }
    }
    if (request.body.action == "delete") {
      switch (request.body.table) {
        case "activities":
          await database.run(
            `DELETE FROM Activities where id = ${request.body.id};`
          );
          response.end();
          break;
        case "markers":
          await database.run(
            `DELETE FROM Markers where id = ${request.body.id};`
          );
          response.end();
          break;
      }
    }
  }
}
