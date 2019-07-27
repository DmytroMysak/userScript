// ==UserScript==
// @name         gmail puida
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mail.google.com/mail/u/0/*
// @grant        none
// ==/UserScript==


const test = setInterval(() => {
  const elem = document.getElementsByClassName('a3s aXjCH m15b09dfbbecb0531');
  const elem2 = document.getElementsByClassName('ii gt adP adO');
  if (!elem2[0]) return;
  if (elem2[0].innerHTML.indexOf('ДЕ Розділ 1 ???') !== -1 && elem2[0].innerHTML.indexOf('Що за пиздобольство?') === 1) {
    const el = elem2[0];
    const index = elem2[0].innerHTML.indexOf('ДЕ Розділ 1 ???');
    el.innerHTML = [el.innerHTML.slice(0, index), 'Що за пиздобольство? ', el.innerHTML.slice(index)].join('');
  }
  console.log(elem);
  for (let i = 0; i < elem.length; ++i) {
    const el = elem[i].getElementsByTagName('span');
    if (!el) return;
    for (let j = 0; j < el.length; ++j) {
      if (el[j].innerHTML.indexOf('Що за пиздобольство?') === -1) {
        const index = el[j].innerHTML.indexOf('ДЕ Розділ 1 ???');
        if (index !== -1) {
          el[j].innerHTML = [el[j].innerHTML.slice(0, index), 'Що за пиздобольство? ', el[j].innerHTML.slice(index)].join('');
          return;
        }
      }
    }
  }
}, 200);
