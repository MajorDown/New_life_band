const fs = require("fs");
const path = require("path");

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
 * Classe Router
 * @param {object} routes - Routes de l'application
 * @param {object} options - Options du routeur
 * @param {string[]} options.apiRoutes - Préfixes des routes API
 * @param {string[]} options.staticFolders - Dossiers de fichiers statiques
 * @returns {object} - Instance de Router
 **/
class Router {
  constructor(routes, options = {}) {
    this.routes = routes;
    this.apiRoutes = options.apiRoutes || ["/api"];
    this.staticFolders = options.staticFolders || ["/public"];
  }

  /**
   * Gère les requêtes HTTP
   * @param {object} req - Objet requête
   * @param {object} res - Objet réponse
   */
  start(req, res) {
    if (req.url.startsWith("/api")) {
      this.handleApiRoutes(req, res);
    } else if (this.isStaticFile(req.url)) {
      this.handleStaticFiles(req, res);
    } else {
      this.handleDynamicRoutes(req, res);
    }
  }

  /**
   * Vérifie si l'URL correspond à un fichier statique
   * @param {string} url - URL de la requête
   * @returns {boolean}
   */
  isStaticFile(url) {
    return this.staticFolders.some((folder) => url.startsWith(folder));
  }

  /**
   * Gère les fichiers statiques
   * @param {object} req - Objet requête
   * @param {object} res - Objet réponse
   */
  handleStaticFiles(req, res) {
    const filePath = path.join(__dirname, req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(this.routes["/404"]({ url: req.url }), "utf-8");
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

  /**
   * Gère les routes dynamiques
   * @param {object} req - Objet requête
   * @param {object} res - Objet réponse
   */
  handleDynamicRoutes(req, res) {
    const renderPage = this.routes[req.url] || this.routes["/404"];
    const statusCode = this.routes[req.url] ? 200 : 404;
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(renderPage({ url: req.url }), "utf-8");
    console.log(`Requête vers : ${req.url}`);
  }

  /**
   * Gère les routes API
   * @param {object} req - Objet requête
   * @param {object} res - Objet réponse
   */
  handleApiRoutes(req, res) {
    const apiHandler = this.apiRoutes[req.url];
    if (apiHandler) {
      apiHandler(req, res);
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "API route not found" }));
    }
  }
}

module.exports = Router;
