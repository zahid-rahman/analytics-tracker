import connectDb from "../db.js";

export default async function handleTrack(req, res) {
  //  get params
  const url = new URL(req.url, `http://${req.headers.host}`);
  const page = url.searchParams.get("page");

  //  connect db
  const db = await connectDb();
  const collection = db.collection("tracks");

  //  modify log payload
  const now = new Date();
  const log = {
    page,
    timestamp: now,
    date: now.toISOString().split("T")[0],
    userAgent: req.headers["user-agent"],
    ip: req.socket.remoteAddress,
  };
  //  insert the log to db
  await collection.insertOne(log);
  //  return data
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify({ success: true, message: "Tracked", log }));
}
