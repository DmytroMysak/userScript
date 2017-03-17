// ==UserScript==
// @name         All Work
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.heroeswm.ru/map.php?*
// @grant        none
// ==/UserScript==
'use strict';
const url = `http://${location.hostname}/`;
const config = { method: 'GET', credentials: 'same-origin'};
const startTable = `<TABLE class=wb cellSpacing=0 cellPadding=3 width=500>`;
const endTable = `</Table>`;

let insertIntoTable = (text) => {
  let elem = document.getElementsByClassName('wb');
  elem = elem[elem.length - 1];
  if (text === '') elem.innerHTML = text;
  elem.innerHTML += text;
};
let httpGet = (url) => {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
};
function makeRequest (url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

let addWork = (text) => {
  const indexStartTable = text.indexOf(startTable);
  const indexEndTable = text.indexOf(endTable, indexStartTable);
  insertIntoTable(text.substring(indexStartTable, indexEndTable + endTable.length));
};

let hrefToRegion = document.querySelector(`[href*='map.php?cx=']`);
if (hrefToRegion) {
  hrefToRegion = hrefToRegion.getAttribute('href').split('&');
  hrefToRegion = hrefToRegion[0] + '&' + hrefToRegion[1];

  insertIntoTable('');
  const extraction = `${hrefToRegion}&st=mn`;
  const treatment = `${hrefToRegion}&st=fc`;
  const production = `${hrefToRegion}&st=sh`;
  addWork(httpGet(`${url}${production}`));
  addWork(httpGet(`${url}${treatment}`));
  addWork(httpGet(`${url}${extraction}`));
  // fetch(`${url}${production}`, config)
  //     .then(response => response.text()).then(text => addWork(text))
  //     .then(() => fetch(`${url}${treatment}`, config))
  //     .then(response => response.text()).then(text => addWork(text))
  //     .then(() => fetch(`${url}${extraction}`, config))
  //     .then(response => response.text())
  //     .then(text => addWork(text));


}
