const removeGames = () => {
  const gamesDiv = document.getElementById('pagelet_canvas_nav_content');
  if (gamesDiv) {
    gamesDiv.parentNode.removeChild(gamesDiv);
  }
};


export default {
  removeGames,
};
