export default function getActivityByID(req, res) {
  res.statusCode = 200;
  res.json({ byID: req.query.id, message: "Get Activity By ID" });
}
