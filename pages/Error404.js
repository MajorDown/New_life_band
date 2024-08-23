import Head from "../components/Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const Error404 = (props) => {
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

export default Error404;
