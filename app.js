const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end('Hello from Riyaz Todlya Hombulli');
};

const server = http.createServer(requestHandler);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

