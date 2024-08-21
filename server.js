const http = require("http");
const Home = require("./pages/Home");
require("dotenv").config();

// Créer le serveur
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(Home(), "utf-8");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Page non trouvée");
      break;
  }
});

// Lancer le serveur
server.listen(port, () => {
  console.log(`Serveur lancé sur le port : ${process.env.PORT}`);
});
