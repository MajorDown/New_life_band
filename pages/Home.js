import Head from "../components/Head.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

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
                <script>
                    window.onload = function() {
                        if (!sessionStorage.getItem('animationPlayed')) {
                            document.body.classList.add('animated');
                            sessionStorage.setItem('animationPlayed', 'true');
                        }
                    }
                </script>
            </body>
        </html>
      `;
};

export default Home;
