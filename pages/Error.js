const Head = require("../components/Head");
const Header = require("../components/Header");
const Footer = require("../components/Footer");

const Error = (props) => {
  const { url } = props;

  return /*html*/ `
        <!DOCTYPE html>
        <html lang="fr">
            ${Head()}
            <body>
                ${Header({ currentPath: url })}
                <main>
                    <h2>Erreur 404</h2>
                    <p>La page <strong>${url}</strong> n'existe pas</p>
                </main>
                ${Footer()}
            </body>
        </html>
    `;
};

module.exports = Error;
