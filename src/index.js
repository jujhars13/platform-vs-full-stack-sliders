const dictionary = require("./js/threshold.js");


console.log(dictionary);

/**
 * easter-egg tribute to the early web
 * We don't know what we're doing with the css and design so
 * we're sticking in silly things to distract from that fact
 */
 setTimeout(() => {
  const titleEl = document.getElementById("page-title");
  const marquee = document.createElement("marquee");
  titleEl.parentNode.insertBefore(marquee, titleEl);
  marquee.appendChild(titleEl);
}, 5000);
