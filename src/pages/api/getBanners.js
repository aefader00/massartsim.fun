import fs from "fs";
import path from "path";

export default function getBanners(request, response) {
  const dir = path.resolve("./public", "banners");

  const filenames = fs.readdirSync(dir);
  console.log(1);
  response.json(filenames);
}
