const Head = require("../components/Head");
const Header = require("../components/Header");

const Home = () => {
  return /*html*/ `
        <!DOCTYPE html>
        <html lang="fr">
            ${Head()}
            <body>
                ${Header({ currentPath: "/" })}
                ${Footer()}
            </body>
        </html>
      `;
};

module.exports = Home;
