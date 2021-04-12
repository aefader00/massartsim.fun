const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const database = await sqlite.open({
    filename: "database.sqlite",
    driver: sqlite3.Database,
  });

  await database.migrate({ force: true });
  const activities = await database.all("select * from activities");
  console.log(JSON.stringify(activities, null, 4));
})();
