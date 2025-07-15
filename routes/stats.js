import connectDb from "../db.js";

export default async function handleStats(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const page = url.searchParams.get("page");
  const date = url.searchParams.get("date");

  const db = await connectDb();
  const collection = db.collection("tracks");

  const query = {};
  if (page) query.page = page;
  if (date) query.date = date;

  const logs = await collection.find(query).toArray();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ count: logs.length, logs }));
}
