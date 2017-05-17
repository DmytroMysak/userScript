// version 0.1
// TODO Можна вибирати ім'я чувака
// TODO Можна вибирати мову з якої перекласти
'use strict';
const Translate = require('google-translate-api');
const ReadlineSync = require('readline-sync');

let state = {
  body: {
    name: '', //TODO
    language: 'ru-RU',
    text: ''
  }
};

const httpPost = (body) => {
  const url = '192.168.0.60:3005/say';
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(`server off`);
      }
    };
    xhr.onerror = () => reject(`server off`);
    xhr.send(body);
  });
};
const repeat = (count) => {
  count = parseInt(count, 10);
  if (typeof count !== 'number') error(`bad value after -r argument: ${count}`);
  const text = state.body.text;
  for (let i = 1; i < count; ++i) {
    state.body.text += ' ' + text;
  }
};
const translate = (language) => {
  return Translate(state.body.text, {to: language})
      .then(res => state.body.text = res.text)
      .catch(err => error(err));
};
const text = (text) => {
  state.body.text = text;
};
const language = (language) => {
  state.body.language = `${language}-${language.toUpperCase()}`;
};
const error = (msg) => {
  console.error(msg);
  process.exit();
};

let args = process.argv.slice(2);
console.log(args);

const functional = new Map();
functional.set('-r', repeat);
functional.set('-t', translate);
functional.set('-s', text);
functional.set('-l', language);

if (args.includes('-s')) {
  const index = args.indexOf('-s');
  const text = args[index + 1];
  args.slice(index, 2);
  args = ['-s', text, ...args];
} else {
  state.body.text = ReadlineSync.question('Enter text: ');
}
const all = [];
for (let i = 0; i < args.length; ++i) {
  if (functional.has(args[i])) {
    all.push(functional.get(args[i])(`${args[++i]}`));
  } else {
    error(`bad argument ${args[i]}`);
  }
}

Promise.all(all).then(()=> httpPost(state.body).then((res) => console.log(res)));
