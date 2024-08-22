const http = require("http");
require("dotenv").config();
const Router = require("./router");

const Home = require("./pages/Home");
const Error404 = require("./pages/Error404");

// Déclaration des routes
const routes = {
  "/": Home({ url: "/" }),
  "/error": Error404,
};

// Configuration des options pour le routeur
const options = {
  apiPrefixes: ["/api"],
  staticFolders: ["/public"],
};

// Création d'une instance de Router avec les options
const router = new Router(routes, options);

// Création du serveur
const server = http.createServer((req, res) => {
  router.start(req, res);
});

// Lancement du serveur
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Serveur lancé sur le port : ${port}`);
});
