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

const router = (req, res, routes) => {
  if (req.url.startsWith("/public/")) {
    // Gestion des fichiers statiques
    const filePath = path.join(__dirname, req.url);
    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === "ENOENT") {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(routes["/404"]({ url: req.url }), "utf-8");
        } else {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end(`Erreur du serveur : ${error.code}`, "utf-8");
        }
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  } else {
    // Gestion des routes dynamiques
    const renderPage = routes[req.url] || routes["/404"];
    const statusCode = routes[req.url] ? 200 : 404;
    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(renderPage({ url: req.url }), "utf-8");
    console.log(`Requête vers : ${req.url}`);
  }
};

module.exports = router;
