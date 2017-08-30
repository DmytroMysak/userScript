// ==UserScript==
// @name         download all music
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.vk.com/audio
// @grant        none
// ==/UserScript==
'use strict';
const getAllLink = () => {
  const list = Array.from(document.getElementsByClassName('audios_block audios_list _si_container')[0].childNodes)
                                                          .filter(elem => elem.className === 'audio_item ai_has_btn');
  console.log(`find ${list.length} songs`);
  return list.map((elem) => {
    const info = elem.getElementsByClassName('ai_label')[0].childNodes;
    return {
      name: `${info[2].innerText} - ${info[0].innerText}`,
      url: elem.getElementsByTagName('input')[0].getAttribute('value')
    };
  });
};
const download = () => {
  let link = document.createElement("a");
  link.download = 'urls.json';
  link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getAllLink()));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
const btn = document.createElement('button');
btn.appendChild(document.createTextNode("Get json with all urls"));
btn.onclick = download;
document.getElementsByClassName('mfoot')[0].appendChild(btn);