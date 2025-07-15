import http from "http";
import handleTrack from "./routes/tracks.js";
import handleStats from "./routes/stats.js";

const server = http.createServer(async (req, res) => {
  //fetching urls and methods from request
  const { url, method } = req;
  // setup all routes here
  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: true, message: "Analytics Tracker API v1.0 up"}));
  }
  if (url.startsWith("/track") && method === "GET") {
    // write track function
    await handleTrack(req, res)
  } else if (url.startsWith("/stats") && method === "GET") {
    // write stats function
    await handleStats(req, res)
  } else {
    // error logs
    res.writeHead(404, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "Not Found" }));
  }
});

const port = 4000;
server.listen(port, () => console.log(`Server listening on port ${port}`));
