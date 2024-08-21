/**
 * composant Header
 * @param {object} props
 * @param {string} props.currentPath
 * @returns {string} template HTML
 **/
const Header = (props) => {
  return /*html*/ `
        <header>
            <div id="headerTitle">
                <img 
                    src="/public/images/logo.png" 
                    alt="logo"
                    width="298"
                    height="185"
                >
                <h1>Site Officiel du groupe de blues rock</h1>
            </div>
            <nav>
                <a 
                    id="linkToMedia" 
                    href="/" 
                    class="${props.currentPath === "/" ? "active" : ""}"
                >
                    Media
                </a>
                <a 
                    id="linkToDates" 
                    href="/dates" 
                    class="${props.currentPath === "/dates" ? "active" : ""}"
                >
                    Dates
                </a>
                <a 
                    id="linkToBio" 
                    href="/bio" 
                    class="${props.currentPath === "/bio" ? "active" : ""}"
                >
                    Bio
                </a>
                <a 
                    id="linkTonews" 
                    href="/news" 
                    class="${props.currentPath === "/news" ? "active" : ""}"
                >
                    News
                </a>
                <a 
                    href="/contact" 
                    class="${props.currentPath === "/contact" ? "active" : ""}"
                >
                    Contact
                </a>
            </nav>
            <div id="headerUnderline"></div>
        </header>
    `;
};

module.exports = Header;
