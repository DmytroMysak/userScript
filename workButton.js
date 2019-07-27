// ==UserScript==
// @name         add button
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       You
// @match        http://www.heroeswm.ru/recruit_event.php
// @grant        none
// ==/UserScript==


const inputs = document.getElementsByTagName('input');
const login = 'LOGIN';
const passwd = 'passwd';

inputs.forEach((elem) => {
  if (elem.type === 'password') elem.value = passwd;
  else if (elem.name.contains('usr')) elem.value = login;
});
