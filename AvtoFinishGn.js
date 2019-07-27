const finishGn = (current, gn) => {
  const placeWithGn = ['2', '6', '16', '21'];
  if (gn == -1 && placeWithGn.includes(current.toString())) {
    setTimeout(() => window.location = `${url}mercenary_guild.php`, 50);
  }
};
const url = `http://${location.hostname}/`;
let flash_map = document.querySelector("object > param[value*='map.swf']");
if (flash_map) flash_map = flash_map.parentNode.querySelector("param[name='FlashVars']");
if (document.querySelector('body') && flash_map) {
  const place_map = flash_map.value.split('=')[1].split(':');
  finishGn(/(?:\*([^*]+))?$/.exec(place_map[0])[1], place_map[13]);
}
/*
 0 - cur place
 1 - view place
 2-10 - have move
 11 - GO
 12 - GV
 13 - GN
 14 - loc from move (only move)
 15 - last time move (only move)
 16 - all time move (only move)
 17 - ?
 18 - clan id
 19 - ?
 20 - ?
 */
