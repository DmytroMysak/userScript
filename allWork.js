// ==UserScript==
// @name         All Work
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://www.heroeswm.ru/map.php?*
// @grant        none
// ==/UserScript==


// eslint-disable-next-line no-restricted-globals
const url = `http://${location.hostname}/`;
const startTable = '<TABLE class=wb cellSpacing=0 cellPadding=3 width=500>';
const endTable = '</Table>';

const insertIntoTable = (text) => {
  let elem = document.getElementsByClassName('wb');
  elem = elem[elem.length - 1];
  if (text === '') elem.innerHTML = text;
  elem.innerHTML += text;
};
const httpGet = url => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr.responseText);
    } else {
      reject(new Error(`${startTable}ERROR${endTable}`));
    }
  };
  xhr.onerror = () => reject(new Error(`${startTable}ERROR${endTable}`));
  xhr.send();
});
const addWork = (text) => {
  const indexStartTable = text.indexOf(startTable);
  const indexEndTable = text.indexOf(endTable, indexStartTable);
  insertIntoTable(text.substring(indexStartTable, indexEndTable + endTable.length));
};

let hrefToRegion = document.querySelector('[href*=\'map.php?cx=\']');
if (hrefToRegion) {
  hrefToRegion = hrefToRegion.getAttribute('href').split('&');
  hrefToRegion = `${hrefToRegion[0]}&${hrefToRegion[1]}`;

  insertIntoTable('');
  const extraction = `${hrefToRegion}&st=mn`;
  const treatment = `${hrefToRegion}&st=fc`;
  const production = `${hrefToRegion}&st=sh`;
  httpGet(`${url}${production}`)
    .then(text => addWork(text))
    .then(() => httpGet(`${url}${treatment}`))
    .then(text => addWork(text))
    .then(() => httpGet(`${url}${extraction}`))
    .then(text => addWork(text));
}
