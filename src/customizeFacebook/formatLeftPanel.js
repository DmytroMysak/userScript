const removeFromExplore = ['Friend Lists', 'Pokes', 'Games', 'On This Day', 'Suggest Edits', 'Find Friends',
  'Games Feed', 'Offers', 'Create a Frame', 'Moments', 'Weather', 'Payment History', 'Recommendations', 'Safety Check',
  'Friends', 'Live Video', 'Crisis Response'];

const removeExplore = () => {
  const ulElement = document.getElementById('appsNav')
    ? document.getElementById('appsNav').querySelector('ul')
    : document.createElement('div');
  const exploreList = Array.from(ulElement.childNodes);

  exploreList.forEach((elem) => {
    if (removeFromExplore.includes(elem.firstChild.title) && ulElement.contains(elem)) {
      ulElement.removeChild(elem);
    }
  });
};

const recursiveWaitForCorrectNodeElement = (elem) => {
  if (elem.parentNode.classList.length && !elem.parentNode.classList.contains('custom-fixed-class-left-panel')) {
    setTimeout(() => recursiveWaitForCorrectNodeElement(elem), 100);
  } else {
    elem.parentNode.classList.add('custom-fixed-class-left-panel');
  }
};

const alwaysFixLeftMenu = () => {
  const leftPanel = document.getElementById('pagelet_navigation');

  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.custom-fixed-class-left-panel { position: fixed !important; top: 0 !important }';
  document.getElementsByTagName('head')[0].appendChild(style);

  return leftPanel ? recursiveWaitForCorrectNodeElement(leftPanel) : null;
};

export default {
  removeExplore,
  alwaysFixLeftMenu,
};
