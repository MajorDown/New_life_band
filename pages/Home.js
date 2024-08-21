const Head = require("../components/Head");
const Header = require("../components/Header");
const Footer = require("../components/Footer");

const Home = (props) => {
  return /*html*/ `
        <!DOCTYPE html>
        <html lang="fr">
            ${Head()}
            <body>
                ${Header({ currentPath: props.url })}
                <main>
                    <h2>Bienvenue !</h2>
                    <p>ceci est la page d'accueil</p>
                </main>
                ${Footer()}
            </body>
        </html>
      `;
};

module.exports = Home;
