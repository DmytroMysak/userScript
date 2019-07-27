// ==UserScript==
// @name         fb fix
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @domain         www.facebook.com
// @include        http://www.facebook.com/*
// @include        https://www.facebook.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==
import fixLeftPanel from './formatLeftPanel';
import fixHeader from './formatHeader';
import fixRightPanel from './formatRightPanel';
import fixSuggestedPanel from './formatSuggestedPages';

const main = () => {
  fixLeftPanel.removeExplore();
  fixLeftPanel.alwaysFixLeftMenu();
  fixHeader.alwaysFixHeader();
  fixRightPanel.removeGames();
  fixSuggestedPanel.removeSuggestedPanel();
  fixSuggestedPanel.fixWidth();
};

setTimeout(main, 0);
