import http from "node:http";

// Start a simple HTTP server
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  return res.end(
    JSON.stringify({
      status: "success",
      message: "hello 👋",
    })
  );
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server is running on port 3000");
});

// Graceful shutdown
const signals = ["SIGINT", "SIGTERM", "SIGQUIT"];

for (const signal of signals) {
  process.on(signal, () => {
    console.log(`Received ${signal}, shutting down`);
    server.close();
  });
}
