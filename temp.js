
import Promise from 'bluebird';
// const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const request = require('request');
const mkdirp = require('mkdirp');

const saveHere = path.join(__dirname, 'vkmusic');
const songs = require('./urls.json').map((elem) => {
  elem.name = elem.name.replace(/\//g, '-')
    .replace(/|/g, '-')
    .replace(/&/g, '-')
    .replace(/"/g, '\'');
  return elem;
});

mkdirp.sync(saveHere);
Promise.each(songs, song => new Promise((resolve, reject) => {
  const place = path.join(saveHere, song.name, '.mp3');
  if (fs.existsSync(place)) {
    console.log(`${song.name} already exist`);
    resolve();
  } else {
    request(song.url)
      .on('error', reject)
      .pipe(fs.createWriteStream(place))
      .on('finish', () => { console.log(`Song downloaded: ${song.name}`); resolve(); });
  }
})).catch(err => console.error(`Failed: ${err.message}`));
