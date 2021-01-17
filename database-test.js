const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

(async () => {
  // open the database
  const db = await sqlite.open({
    filename: "./activities.sqlite",
    driver: sqlite3.Database,
  });

  await db.migrate({ force: true });
  const activities = await db.all("select * from activities");
  console.log(JSON.stringify(activities, null, 4));
})();
