import { readFile } from "fs";
import { join, extname as _extname, dirname } from "path";
import { fileURLToPath } from "url";

// Obtenir __dirname dans le contexte du module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".eot": "application/vnd.ms-fontobject",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
};

/**
 * @class Router
 * Classe permettant de gérer les routes d'un site web
 * @param {Object} routes - Les routes de l'application
 * @param {Object} options - Les options de configuration du routeur
 * @param {Array} options.apiPrefixes - Les préfixes des routes API
 * @param {Array} options.staticFolders - Les dossiers contenant les fichiers statiques
 */
class Router {
  constructor(routes, options = {}) {
    this.routes = routes;
    this.apiPrefixes = options.apiPrefixes || "/api";
    this.staticFolders = options.staticFolders || "/public";
  }

  // Lancement du serveur
  start(req, res) {
    // Si la requête est un fichier statique, on traite la requête en tant que fichier statique
    if (this.isStaticFile(req.url)) {
      this.handleStaticFiles(req, res);
    }
    // Si la requête est une requête API, on traite la requête en tant que requête API
    else if (this.isApiRequest(req.url)) {
      this.handleApiRoutes(req, res);
      console.log(`Requète API: "${req.url}" => status: "${res.statusCode}"`);
    }
    // Si la requête est une requête Web, on traite la requête en tant que requête Web
    else if (this.isDeclaredRoute(req.url)) {
      this.handleWebRoutes(req, res);
      console.log(`Requète Web: "${req.url}" => status: "${res.statusCode}"`);
    }
    // Si la requête est erronée, on traite la requête en tant qu'erreur
    else {
      this.handleError(req, res);
      console.log(
        `Requète erronée: "${req.url}" => status: "${res.statusCode}"`
      );
    }
  }

  // si la requète est un fichier statique...
  isStaticFile(url) {
    return this.staticFolders.some((folder) => url.startsWith(folder));
  }

  // ...on traite la requête en tant que fichier statique
  handleStaticFiles(req, res) {
    const filePath = join(__dirname, req.url);
    const extname = String(_extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === "ENOENT") {
          this.handleError(req, res); // Utilise la page d'erreur définie si le fichier n'existe pas
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(`Erreur du serveur : ${error.code}`, "utf-8");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  }

  // si la requète est une requête API...
  isApiRequest(url) {
    return this.apiPrefixes.some((prefix) => url.startsWith(prefix));
  }

  // ...on traite la requête en tant que requête API
  handleApiRoutes(req, res) {
    // si la route contient this.apiPrefixes ou "/api" alors on traite la requête en tant que requête API
    if (req.url.startsWith(this.apiPrefixes) || req.url.startsWith("/api")) {
      // si la route est déclarée, on traite la requête en tant que requête API
      if (this.routes[req.url]) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(this.routes[req.url]()), "utf-8");
      }
      // si la route n'est pas déclarée, on renvois un message d'erreur
      else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "route introuvable" }), "utf-8");
      }
    }
  }

  // si la route est déclarée...
  isDeclaredRoute(url) {
    return this.routes[url];
  }

  // ...on traite la requête en tant que requête Web
  handleWebRoutes(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(this.routes[req.url], "utf-8");
  }

  // Gestion des erreurs
  handleError(req, res) {
    // Vérifie si "/error" est une fonction et l'exécute pour obtenir le contenu
    if (typeof this.routes["/error"] === "function") {
      const errorPageContent = this.routes["/error"]({ url: req.url });
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(errorPageContent, "utf-8");
    } else {
      // Si la route "/error" n'est pas définie ou n'est pas une fonction, on renvoie un message par défaut
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(`<h1>Page ${req.url} introuvable</h1>`, "utf-8");
    }
  }
}

export default Router;
