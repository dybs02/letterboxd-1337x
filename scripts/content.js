const textFooter = document.querySelector('.text-link.text-footer');
const lastLink = textFooter.querySelectorAll('a')[textFooter.querySelectorAll('a').length - 1];

const filmTitleElement = document.querySelector('.headline-1.filmtitle .name');
const title = filmTitleElement ? filmTitleElement.textContent.trim() : null;

const yearElement = document.querySelector('.releaseyear a');
const year = yearElement ? yearElement.textContent.trim() : null;


if (lastLink && title && year) {
  const query = encodeURIComponent(`${title} ${year}`);

  const link_1337x_4k = document.createElement("a");
  link_1337x_4k.href = `https://www.1337x.to/search/${query}+2160p/1/`;
  link_1337x_4k.target = "_blank";
  link_1337x_4k.textContent = "1337x 4K";

  const link_1337x = document.createElement("a");
  link_1337x.href = `https://www.1337x.to/search/${query}/1/`;
  link_1337x.target = "_blank";
  link_1337x.textContent = "1337x";


  lastLink.insertAdjacentElement('afterend', link_1337x_4k);
  lastLink.insertAdjacentElement('afterend', link_1337x);
}