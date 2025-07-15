import { MongoClient } from "mongodb";

export default async function connectDb() {
  const uri = "mongodb://localhost:27017/analytics_tracker_db";
  const client = new MongoClient(uri);
  let db;
  await client.connect();
  console.log("Database connected");
  db = client.db("analytics_tracker_db");
  return db;
}
