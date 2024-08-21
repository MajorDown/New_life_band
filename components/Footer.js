/**
 * composant Footer
 * @returns {string} HTML template
 */
const Footer = () => {
  const actualyear = new Date().getFullYear();

  return /*html*/ `
    <footer>
      <p>© Copyright ${actualyear} - Tout droit réservé</p>
      <p>Site réalisé par Romain Fouillaron</p>
    </footer>
  `;
};

module.exports = Footer;
