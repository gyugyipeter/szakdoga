const tunings = {
  "Standard": { 1: "E1", 2: "A1", 3: "D2", 4: "G2", 5: "B2", 6: "E3" },
  "Eb Standard": { 1: "Eb1", 2: "Ab1", 3: "Db2", 4: "Gb2", 5: "Bb2", 6: "Eb3" },
  "D Standard": { 1: "D1", 2: "G1", 3: "C2", 4: "F2", 5: "A2", 6: "D3" },
  "Db Standard": { 1: "Db1", 2: "Gb1", 3: "B1", 4: "E2", 5: "Ab2", 6: "Db3" },
  "C Standard": { 1: "C1", 2: "F1", 3: "Bb1", 4: "Eb2", 5: "G2", 6: "C3" },
  "Drop D": { 1: "D1", 2: "A1", 3: "D2", 4: "G2", 5: "B2", 6: "E3" },
  "Drop Db": { 1: "Db1", 2: "Ab1", 3: "Db2", 4: "Gb2", 5: "Bb2", 6: "Eb3" },
  "Drop C": { 1: "C1", 2: "G1", 3: "C2", 4: "F2", 5: "A2", 6: "D3" },
};

const stringKeys = {
  1: ["y", "x", "c", "v", "b", "n", "m", ",", "."],
  2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  3: ["q", "w", "e", "r", "t", "z", "u", "i", "o"],
  4: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  5: ["shift+q", "shift+w", "shift+e", "shift+r", "shift+t", "shift+z", "shift+u", "shift+i", "shift+o"],
  6: ["shift+1", "shift+2", "shift+3", "shift+4", "shift+5", "shift+6", "shift+7", "shift+8", "shift+9"],
}

export function getNotesForTuning(tuning) {
  return tunings[tuning];
}

export function getStringNumber(keyBoardEvent) {
  let stringNum = 0;
  Object.keys(stringKeys).forEach(key => {
    if (stringKeys[key].includes(keyBoardEvent)) stringNum = key;
  });
  return stringNum;
}
