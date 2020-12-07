function importAll(r) {
  return r.keys().map(r);
}

// import audio files
const pianoSounds = importAll(
  require.context("../sounds/piano/", false, /\.(mp3)$/)
);
const cleanGuitarSounds = importAll(
  require.context("../sounds/guitar/clean/", false, /\.(mp3)$/)
);
const distortedGuitarSounds = importAll(
  require.context("../sounds/guitar/distorted/", false, /\.(mp3)$/)
);

const piano = new Map();
const cleanGuitar = new Map();
const distortedGuitar = new Map();

// map files to notes
pianoSounds.forEach((audioFile) => {
  piano.set(audioFile.substring(14, audioFile.indexOf(".")), audioFile);
});
cleanGuitarSounds.forEach((audioFile) => {
  cleanGuitar.set(audioFile.substring(14, audioFile.indexOf(".")), audioFile);
});
distortedGuitarSounds.forEach((audioFile) => {
  distortedGuitar.set(
    audioFile.substring(14, audioFile.indexOf(".")),
    audioFile
  );
});

// all musical notes, can be useful for every instrument
const notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export function getCleanGuitar() {
  return cleanGuitar;
}

export function getDistortedGuitar() {
  return distortedGuitar;
}

export function getPiano() {
  return piano;
}

export function getNotes() {
  return notes;
}
