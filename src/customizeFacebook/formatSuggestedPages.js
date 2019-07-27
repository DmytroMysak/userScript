const suggestedPanel = document.getElementById('home_right_column');

const removeSuggestedFriends = () => {
  const egoPane = suggestedPanel.getElementById('pagelet_ego_pane').getElementsByClassName('ego_section');
  Array.from(egoPane).forEach((elem) => {
    if (elem.innerHTML.includes('People You May Know')) {
      const child = elem.parentNode.parentNode.parentNode;
      child.parentNode.removeChild(child);
    }
  });
};

const removeSuggestedPages = () => {
  const egoPane = suggestedPanel.getElementById('pagelet_ego_pane').getElementsByClassName('ego_section');
  Array.from(egoPane).forEach((elem) => {
    if (elem.innerHTML.includes('People You May Know')) {
      const child = elem.parentNode.parentNode.parentNode;
      child.parentNode.removeChild(child);
    }
  });
};

const removeSuggestedPanel = () => {
  const allSuggestedPanel = document.getElementById('rightCol');
  while (allSuggestedPanel.hasChildNodes()) {
    allSuggestedPanel.removeChild(allSuggestedPanel.childNodes[0]);
  }
};

const fixWidth = () => {
  const allSuggestedPanel = document.getElementById('rightCol');
  const widthAllSuggestedPanel = allSuggestedPanel.clientWidth;

  const mainContainer = document.getElementById('mainContainer');
  mainContainer.style.marginLeft = `${parseInt(widthAllSuggestedPanel, 10) / 2}px`;

  const header = document.getElementById('bluebarRoot');
  header.firstChild.firstChild.style.paddingRight = 0;
};

export default {
  removeSuggestedPanel,
  fixWidth,
  removeSuggestedFriends,
  removeSuggestedPages,
};
