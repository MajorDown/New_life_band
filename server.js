const http = require("http");
require("dotenv").config();
const router = require("./router");

const Home = require("./pages/Home");
const Error404 = require("./pages/Error");

// Déclaration des routes
const routes = {
  "/": Home,
  "/404": Error404, // Route pour la page d'erreur 404
  // Ajoute d'autres routes ici
};

// Créer le serveur
const server = http.createServer((req, res) => {
  router(req, res, routes);
});

// Lancer le serveur
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Serveur lancé sur le port : ${port}`);
});
