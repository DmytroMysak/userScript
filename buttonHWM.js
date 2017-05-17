// ==UserScript==
// @name         add button
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        http://www.heroeswm.ru/recruit_event.php
// @grant        none
// ==/UserScript==

'use strict';
const button = `<center><form style="display: inline;" action="recruit_event.php" method="post"><input type="hidden" name="sign" value="ecd53df53b4af2b3481851fe7505fc7d"><input type="hidden" name="act" value="start_search_after"><input type="submit" value="Бродить по подземелью"></form></center>`;
const all = document.getElementsByTagName("font");

const text = `Подземные пещеры`;
const textElem = `<font color="black">Подземные пещеры</font>`;

const Clear = () => {
    let id = window.setTimeout(function() {}, 0);
    while (id--) {
        window.clearTimeout(id);
    }
    // clearTimeout(Timer);
    window.location='/recruit_event.php';
};
for (let i = (all.length - 1); i >= 0; --i) {
    if (all[i].innerText === text && all[i].parentNode.innerHTML === textElem) {
        const elem = all[i].parentNode;
        elem.innerHTML = button;
        const btn = document.createElement("button");
        btn.appendChild(document.createTextNode("MyButton"));
        btn.onclick = Clear;
        elem.appendChild(btn);
        break;
    }
}

const wait = document.getElementsByTagName("script");
const oldFunc = `if (Delta <=0) window.location="/recruit_event.php"`;

const newFunc = `Delta=100;
function Refresh()
{   if (Timer>=0) clearTimeout(Timer);
    Delta = Delta - 1;
    if (Delta > 0) document.getElementById('refr_text').innerHTML= 'Вы бродите по подземелью. Идет поиск. Осталось '+Delta+'  сек.';   if (Delta > 0) Timer=setTimeout('Refresh()',1000);
    if (Delta <=0) window.location="/recruit_event.php"}
Timer=setTimeout('Refresh()', 1000);`;

for (let i = wait.length - 1; i >= 0; --i) {
    if (wait[i].text.toString().indexOf(oldFunc) >= 0) {
        wait[i].text = newFunc;
        break;
    }
}