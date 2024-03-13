// SOLUTIONS TO MAP ANALYZER LEVELS

// Global Variables that store row and column of tile that mouse is on

let row, column;
let tile = document.getElementById("currentTile");

// Solution Functions...
// Write your code here inside these functions

function level1Solution() {
  if (column <= 4) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level2Solution() {
  if (column >= 8) {
    tile.innerHTML = "WATER";
  } else if (column < 8 && column >= 3) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILL";
  }
}

function level3Solution() {
  if (column > 2 && column < 8) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "HILL";
  }
}

function level4Solution() {
  if (row < 3) {
    tile.innerHTML = "HILL";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level5Solution() {
  if (row < 3) {
    tile.innerHTML = "HILL";
  } else if (row > 2 && row < 6) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level6Solution() {
  if (row > 1 && row < 6) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level7Solution() {
  if (row == 4 && column == 7) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level8Solution() {
  if (row == 5 || column == 2) {
    tile.innerHTML = "TREE";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level9Solution() {
  if (row < 6 && column < 6) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level10Solution() {
  if (column < 2) {
    tile.innerHTML = "HILL";
  } else if (column > 1 && column < 4) {
    tile.innerHTML = "TREE";
  } else if (column > 3 && column < 8) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "WATER";
  }
}

function level11Solution() {
  if (row < 4 && column < 6) {
    tile.innerHTML = "WATER";
  }
  if (row < 4 && column > 5) {
    tile.innerHTML = "HILL";
  }
  if (row > 3 && column > 5) {
    tile.innerHTML = "TREE";
  }
  if (row > 3 && column < 6) {
    tile.innerHTML = "SAND";
  }
}

function level12Solution() {
  if ((row < 5 && column < 6) || (row > 4 && column > 5)) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}

function level13Solution() {
  if (row > 1 && row < 6 && column > 3 && column < 10) {
    tile.innerHTML = "SAND";
  } else {
    tile.innerHTML = "TREE";
  }
}

function level14Solution() {
  if (row > 0 && row < 6 && column > 1 && column < 5) {
    tile.innerHTML = "TREE";
  } else if (row > 2 && row < 6 && column > 6 && column < 11) {
    tile.innerHTML = "WATER";
  } else {
    tile.innerHTML = "SAND";
  }
}
