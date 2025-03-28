const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  const data = await fs.readFile("./data.json");
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(data);
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  else console.log("Sever is running on the port 9000");
});
