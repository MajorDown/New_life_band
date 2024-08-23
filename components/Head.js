/**
 * composant Head
 * @returns {string} template HTML
 */
const Head = () => {
  return /*html*/ `
      <head>
          <title>New Life Band</title>
          <meta charset="UTF-8">
          <meta name="description" content="Site officiel du groupe de rock blues vendéen New Life">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="icon" href="favicon.ico">
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Overpass+Mono:wght@500&display=swap" rel="stylesheet">
          <link href="public/css/styles.css" rel="stylesheet">
          <link rel="icon" href="public/images/favicon.ico" type="image/x-icon">
      </head>
      `;
};

export default Head;
