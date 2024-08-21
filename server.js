const http = require("http");
const Home = require("./pages/Home");
const Error = require("./pages/Error");
require("dotenv").config();

// Récupérer le port
const port = process.env.PORT || 3000;

const routes = {
  "/": Home,
  // Ajoute d'autres routes ici
};

const router = (req, res) => {
  const renderPage = routes[req.url] || Error;
  const statusCode = routes[req.url] ? 200 : 404;

  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.end(renderPage({ url: req.url }), "utf-8");
};

// Créer le serveur
const server = http.createServer((req, res) => {
  router(req, res);
});

// Lancer le serveur
server.listen(port, () => {
  console.log(`Serveur lancé sur le port : ${port}`);
});
