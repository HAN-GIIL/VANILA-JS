const COORDS = "coords";

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
  }
}

function init() {}

init();
