export default function getActivities(req, res) {
  res.statusCode = 200;
  res.json({ hello: "world", method: req.method });
}
