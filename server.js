import { createServer } from "http";
import dotenv from "dotenv";
dotenv.config();
import Router from "./router.js";
import Home from "./pages/Home.js";
import Error404 from "./pages/Error404.js";

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
const server = createServer((req, res) => {
  router.start(req, res);
});

// Lancement du serveur
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Serveur lancé sur le port : ${port}`);
});
